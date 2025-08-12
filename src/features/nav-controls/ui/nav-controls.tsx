import { useData } from '@/providers/data-provider';
import { CaretIcon } from '@/shared/icons/caret';
import scss from './nav-controls.module.scss';

export function NavControls() {
  const { activeIndex, length, previousYears, nextYears, goToYear } = useData();

  return (
    <div className={scss.controls}>
      <div className={scss.navigationContainer}>
        <span className={scss.navigation}>
          0{activeIndex + 1}/0{length}
        </span>
        <div className={scss.buttonsContainer}>
          <button
            type="button"
            className={scss.navButton}
            onClick={previousYears}
            disabled={activeIndex === 0}
          >
            <CaretIcon direction="left" classname={scss.caretIcon} />
          </button>
          <button
            type="button"
            className={scss.navButton}
            onClick={nextYears}
            disabled={activeIndex === length - 1}
          >
            <CaretIcon direction="right" classname={scss.caretIcon} />
          </button>
        </div>
      </div>
      <div className={`${scss.pagintionBullet}`}>
        {Array.from({ length })
          .fill(null)
          .map((el, i) => (
            <span
              key={i}
              className={`${scss.customBullet} ${i === activeIndex && scss.activeBullet}`}
              onClick={() => goToYear(i)}
            />
          ))}
      </div>
      <div />
    </div>
  );
}
