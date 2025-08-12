import { SliderItem } from '@/entities/slider-item';
import { NavControls } from '@/features/nav-controls';
import { useData } from '@/providers/data-provider';
import { CaretIcon } from '@/shared/icons/caret';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import scss from './slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export function Slider() {
  const { activeValue } = useData();
  const swiperWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedPeriods, setDisplayedPeriods] = useState(activeValue.periods);

  useEffect(() => {
    if (swiperWrapperRef.current && containerRef.current) {
      const tl = gsap.timeline();

      tl.to([swiperWrapperRef.current, containerRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setDisplayedPeriods(activeValue.periods);
          if (swiperWrapperRef.current && containerRef.current) {
            gsap.set([swiperWrapperRef.current, containerRef.current], { y: 20 });
          }
        },
      }).to([swiperWrapperRef.current, containerRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [activeValue.periods]);

  return (
    <article className={`${scss.container}`}>
      <div ref={containerRef} className={`container ${scss.header}`}>
        <h1>{activeValue.title}</h1>
        <div className={`${scss.line}`} />
      </div>
      <div className={scss.sliderContainer}>
        <div ref={swiperWrapperRef} className={scss.swiperWrapper}>
          <Swiper
            key={displayedPeriods.map((el) => el.year).join('-')}
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
            {displayedPeriods.map((el) => (
              <SwiperSlide key={el.year}>
                <SliderItem year={el.year} content={el.content} />
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
          <button type="button" className={scss.prevButton}>
            <CaretIcon direction="left" stroke="#3877EE" classname={scss.caretIcon} />
          </button>
          <button type="button" className={scss.nextButton}>
            <CaretIcon direction="right" stroke="#3877EE" classname={scss.caretIcon} />
          </button>
        </div>
        <NavControls />
      </div>
    </article>
  );
}
