import type { SliderItemProps } from '../types';
import scss from './slider-item.module.scss';

export function SliderItem({ year, content }: SliderItemProps) {
  return (
    <div className={scss.itemContainer}>
      <h1 className={scss.year}>{year}</h1>
      <p className={scss.content}>{content}</p>
    </div>
  );
}
