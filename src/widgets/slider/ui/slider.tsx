import { SliderItem } from '@/entities/slider-item';
import { NavControls } from '@/features/nav-controls';
import { CaretIcon } from '@/shared/icons/caret';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SliderProps } from '../types';
import scss from './slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export function Slider({ items }: SliderProps) {
  return (
    <article className={`${scss.container}`}>
      <div className="container">
        <div className={`${scss.line}`} />
      </div>
      <div className={scss.sliderContainer}>
        <div className={scss.swiperWrapper}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={25}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={{
              prevEl: `.${scss.prevButton}`,
              nextEl: `.${scss.nextButton}`,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {items.map((el) => (
              <SwiperSlide key={el.year}>
                <SliderItem year={el.year} content={el.content} />
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
          <button type="button" className={scss.prevButton}>
            <CaretIcon direction="left" />
          </button>
          <button type="button" className={scss.nextButton}>
            <CaretIcon direction="right" />
          </button>
        </div>
        <NavControls />
      </div>
    </article>
  );
}
