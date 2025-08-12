import { Slider } from '@/widgets/slider';
import { YearPeriods } from '@/widgets/year-periods';
import type React from 'react';
import { data } from '../../public/mock/data';
import scss from './app.module.scss';

const App: React.FC = () => {
  return (
    <main className={scss.main}>
      <article className={`container ${scss.titleContainer}`}>
        <div className={scss.titleLine} />
        <h1 className={scss.title}>Исторические даты</h1>
      </article>
      <YearPeriods data={data[0]} />
      <Slider items={data[0].periods} />
      <div className={scss.line} />
      <div className={`${scss.line} ${scss.lineLeft}`} />
      <div className={`${scss.line} ${scss.lineRight}`} />
    </main>
  );
};

export default App;
