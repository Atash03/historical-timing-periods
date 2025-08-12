import { useData } from '@/providers/data-provider';
import { gsap } from 'gsap';
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CircleWithDotsProps } from '../types';
import { Circle } from './circle';
import scss from './circle-with-dots.module.scss';

export const CircleWithDots: React.FC<CircleWithDotsProps> = ({ numberOfDots }) => {
  const { activeIndex, goToYear } = useData();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dotsContainerRef = useRef(null);

  const dots = [];
  const angleStep = 360 / numberOfDots;
  const initialAngle = 300;

  const selectedDotAngle = initialAngle + angleStep * activeIndex;
  const rotationAngle = -selectedDotAngle + 300;

  useEffect(() => {
    if (dotsContainerRef.current) {
      gsap.to(dotsContainerRef.current, {
        rotation: rotationAngle,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  }, [rotationAngle]);

  const dotRefs = useRef(new Map());
  const dotLabelRefs = useRef(new Map());

  const getClampedRadius = useCallback(() => {
    const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
    const minPx = 9.375 * rootFontSize;
    const maxPx = 16.5625 * rootFontSize;
    const vwPx = (25 / 100) * window.innerWidth;
    return Math.max(minPx, Math.min(vwPx, maxPx));
  }, []);

  useEffect(() => {
    const radius = getClampedRadius();
    dotRefs.current.forEach((dot, i) => {
      const angle = initialAngle + angleStep * i;
      const angleRad = (angle * Math.PI) / 180;
      const x = radius * Math.cos(angleRad);
      const y = radius * Math.sin(angleRad);

      gsap.to(dot, {
        x: x,
        y: y,
        rotation: angleStep * activeIndex,
        duration: 0,
      });
    });
  }, [getClampedRadius, angleStep, activeIndex]);

  useEffect(() => {
    dotLabelRefs.current.forEach((label, i) => {
      gsap.killTweensOf(label);

      if (i === activeIndex) {
        gsap.to(label, {
          opacity: 1,
          duration: 0.5,
          delay: 1,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to(label, {
          opacity: 0,
          duration: 0,
        });
      }
    });
  }, [activeIndex]);

  for (let i = 0; i < numberOfDots; i++) {
    let dotClass = scss.dot;
    if (i === activeIndex) {
      dotClass = scss.mainDot;
    } else if (i === hoveredIndex) {
      dotClass = scss.activeDot;
    }

    dots.push(
      <div
        ref={(el) => dotRefs.current.set(i, el)}
        className={dotClass}
        onClick={() => goToYear(i)}
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {(i === activeIndex || i === hoveredIndex) && <span className={scss.dotIndex}>{i}</span>}
        <span ref={(el) => dotLabelRefs.current.set(i, el)} className={scss.dotLabel}>
          {i}
        </span>
      </div>,
    );
  }

  return (
    <div className={scss.container}>
      <div className={scss.circleContainer}>
        <Circle />
        <div ref={dotsContainerRef} className={scss.dotsContainer}>
          {dots}
        </div>
      </div>
    </div>
  );
};
