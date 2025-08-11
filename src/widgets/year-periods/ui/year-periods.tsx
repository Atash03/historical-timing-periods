import { YearDisplay } from '@/entities/year-display';
import { CircleWithDots } from '@/features/circle-with-dots';
import type { YearPeriodsProps } from '../types';
import scss from './year-period.module.scss';

export function YearPeriods({ data }: YearPeriodsProps) {
  return (
    <article className={`container ${scss.container}`}>
      <div className={scss.years}>
        <YearDisplay year={data.startYear} color="blue" />
        <YearDisplay year={data.endYear} color="pink" />
      </div>
      <CircleWithDots numberOfDots={6} />
    </article>
  );
}
