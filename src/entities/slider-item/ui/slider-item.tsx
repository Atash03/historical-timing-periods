import type { Period } from '@/shared/types';
import scss from './slider-item.module.scss';

export function SliderItem({ year, content }: Period) {
  return (
    <div className={scss.itemContainer}>
      <h1 className={scss.year}>{year}</h1>
      <p className={scss.content}>{content}</p>
    </div>
  );
}
