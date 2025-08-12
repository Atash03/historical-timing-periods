import { YearDisplay } from '@/entities/year-display';
import { CircleWithDots } from '@/features/circle-with-dots';
import { useData } from '@/providers/data-provider';
import scss from './year-period.module.scss';

export function YearPeriods() {
  const { activeValue, length } = useData();

  console.log(activeValue.startYear, activeValue.endYear);

  return (
    <article className={scss.container}>
      <div className={`container ${scss.years}`}>
        <YearDisplay year={activeValue.startYear} color="blue" />
        <YearDisplay year={activeValue.endYear} color="pink" />
      </div>
      <div className={scss.line} />
      <CircleWithDots numberOfDots={length} />
    </article>
  );
}
