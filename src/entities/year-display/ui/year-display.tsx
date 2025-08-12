import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import type { YearDisplayProps } from '../types';
import scss from './year-display.module.scss';

export function YearDisplay({ color, year }: YearDisplayProps) {
  const yearRef = useRef<HTMLHeadingElement>(null);
  const prevYearRef = useRef(year);
  const digits = String(year).split('');

  useEffect(() => {
    const currentDigits = String(year).split('');
    const prevDigits = String(prevYearRef.current).split('');
    const digitElements = yearRef.current?.querySelectorAll(`.${scss.digit}`);

    if (digitElements) {
      digitElements.forEach((el, i) => {
        const currentDigit = currentDigits[i];
        const prevDigit = prevDigits[i];

        if (currentDigit !== prevDigit) {
          gsap.from(el, {
            innerText: prevDigit,
            duration: 0.8,
            snap: {
              innerText: 1,
            },
            ease: 'power3.out',
            delay: i * 0.05,
          });
        }
      });
    }

    prevYearRef.current = year;
  }, [year]);

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
