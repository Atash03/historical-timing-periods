import { Slider } from '@/widgets/slider';
import { YearPeriods } from '@/widgets/year-periods';
import type React from 'react';
import { data } from '../../public/mock/data';
import scss from './app.module.scss';

const App: React.FC = () => {
  return (
    <main className={scss.main}>
      <article className={`container ${scss.titleContainer}`}>
        <h1 className={scss.title}>Исторические даты</h1>
      </article>
      <YearPeriods data={data[0]} />
      <Slider items={data[0].periods} />
    </main>
  );
};

export default App;
