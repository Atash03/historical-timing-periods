import { YearDisplay } from '@/entities/year-display';
import { Slider } from '@/widgets/slider';
import type React from 'react';
import { data } from '../../public/mock/data';
import scss from './app.module.scss';

const App: React.FC = () => {
  return (
    <main className={scss.main}>
      <article className={`container ${scss.titleContainer}`}>
        <h1 className={scss.title}>Исторические даты</h1>
      </article>
      <article className={`container ${scss.years}`}>
        <YearDisplay year={data[0].startYear} color="blue" />
        <YearDisplay year={data[0].endYear} color="pink" />
      </article>
      <article className={`${scss.sliderContainer}`}>
        <div className="container">
          <div className={`${scss.line}`} />
        </div>
        <Slider items={data[0].periods} />
      </article>
    </main>
  );
};

export default App;
