import { DataProvider } from '@/providers/data-provider';
import { Header } from '@/widgets/header';
import { Slider } from '@/widgets/slider';
import { YearPeriods } from '@/widgets/year-periods';
import { data } from '../../public/mock/data';
import scss from './app.module.scss';

const App = () => {
  return (
    <DataProvider initialData={data}>
      <section className={scss.main}>
        <Header />
        <YearPeriods />
        <Slider items={data[0].periods} />
        <div className={scss.line} />
        <div className={`${scss.line} ${scss.lineLeft}`} />
        <div className={`${scss.line} ${scss.lineRight}`} />
      </section>
    </DataProvider>
  );
};

export default App;
