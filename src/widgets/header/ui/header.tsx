import gsap from 'gsap';
import { useEffect } from 'react';
import scss from './header.module.scss';

export function Header() {
  useEffect(() => {
    gsap.to(`.${scss.titleLine}`, {
      height: 130,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      onComplete: () => {
        gsap.to(`.${scss.title}`, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      },
    });
  }, []);

  return (
    <article className={`container ${scss.titleContainer}`}>
      <div className={scss.titleLine} />
      <h1 className={scss.title}>Исторические даты</h1>
    </article>
  );
}
