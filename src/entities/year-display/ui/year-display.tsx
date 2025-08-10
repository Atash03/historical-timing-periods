import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';
import type { YearDisplayProps } from '../types';
import scss from './year-display.module.scss';

export function YearDisplay({ color, year }: YearDisplayProps) {
  const yearRef = useRef<HTMLHeadingElement>(null);
  const digits = String(year).split('');

  useLayoutEffect(() => {
    const digitElements = yearRef.current?.querySelectorAll(`.${scss.digit}`);
    if (digitElements) {
      digitElements.forEach((el, i) => gsap.set(el, i % 2 === 0 ? { y: '-100%' } : { y: '100%' }));
    }
  }, []);

  useEffect(() => {
    const digitElements = yearRef.current?.querySelectorAll(`.${scss.digit}`);
    if (digitElements) {
      gsap.to(digitElements, {
        y: '0%',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.05,
      });
    }
  }, []);

  return (
    <h1 ref={yearRef} className={`${scss.year} ${scss[color]}`}>
      {digits.map((digit, index) => (
        <div key={index} className={scss.digitContainer}>
          <span className={scss.digit}>{digit}</span>
        </div>
      ))}
    </h1>
  );
}
