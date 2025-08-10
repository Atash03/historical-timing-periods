import { CaretIcon } from '@/shared/icons/caret';
import scss from './nav-controls.module.scss';

export function NavControls() {
  return (
    <div className={scss.controls}>
      <div className={scss.navigationContainer}>
        <span className={scss.navigation}>01/0{1}</span>
        <div className={scss.buttonsContainer}>
          <button type="button" className={scss.navButton}>
            <CaretIcon direction="left" />
          </button>
          <button type="button" className={scss.navButton}>
            <CaretIcon direction="right" />
          </button>
        </div>
      </div>
      <div className={`${scss.pagintionBullet}`}>
        {Array.from({ length: 1 })
          .fill(null)
          .map((el, i) => (
            <span key={i} className={scss.customBullet} />
          ))}
      </div>
      <div />
    </div>
  );
}
