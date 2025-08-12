import { YearDisplay } from '@/entities/year-display';
import { CircleWithDots } from '@/features/circle-with-dots';
import type { YearPeriodsProps } from '../types';
import scss from './year-period.module.scss';

export function YearPeriods({ data }: YearPeriodsProps) {
  return (
    <article className={scss.container}>
      <div className={`container ${scss.years}`}>
        <YearDisplay year={data.startYear} color="blue" />
        <YearDisplay year={data.endYear} color="pink" />
      </div>
      <div className={scss.line} />
      <CircleWithDots numberOfDots={6} />
    </article>
  );
}
