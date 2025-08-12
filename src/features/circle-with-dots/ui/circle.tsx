import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import scss from './circle.module.scss';

export function Circle() {
  const circleRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    if (circleRef.current) {
      const length = circleRef.current.getTotalLength();
      gsap.set(circleRef.current, {
        strokeDasharray: length,
        strokeDashoffset: -length,
      });
      gsap.to(circleRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <svg
      className={scss.circle}
      viewBox="0 0 530 530"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={circleRef}
        opacity="0.2"
        d="M 529.5,265 A 264.5,264.5 0 1,1 0.5,265 A 264.5,264.5 0 1,1 529.5,265"
        stroke="#42567A"
      />
      <title>Circle</title>
    </svg>
  );
}
