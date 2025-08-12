import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import scss from './circle.module.scss';

export function Circle() {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (!circleRef.current) return;

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
  }, []);

  return (
    <svg
      className={scss.circle}
      viewBox="0 0 530 530"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Circle</title>
      <circle ref={circleRef} opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A" />
    </svg>
  );
}
