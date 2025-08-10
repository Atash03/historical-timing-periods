import { SliderItem } from '@/entities/slider-item';
import { NavControls } from '@/features/nav-controls';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SliderProps } from '../types';
import scss from './slider.module.scss';
import 'swiper/css';

export function Slider({ items }: SliderProps) {
  return (
    <div className={scss.sliderContainer}>
      <Swiper slidesPerView={'auto'} spaceBetween={25} freeMode={true} modules={[FreeMode]}>
        {items.map((el) => (
          <SwiperSlide key={el.year}>
            <SliderItem year={el.year} content={el.content} />
          </SwiperSlide>
        ))}
        <SwiperSlide />
      </Swiper>
      <NavControls />
    </div>
  );
}
