import * as React from 'react';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import styles from './Features.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { featuresData } from './featuresData';

import { AnimatePresence, motion } from 'framer-motion';

import clsx from 'clsx';

export const Features = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(
    null,
  );
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Swiper
          effect={'fade'}
          modules={[Thumbs, EffectFade]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSlideChange={({ realIndex }) => setActiveSlideIndex(realIndex)}
          fadeEffect={{ crossFade: true }}
        >
          {featuresData.map(({ ...feature }, index) => (
            <SwiperSlide key={`feature-${index}`} className={styles.slide}>
              {({ isActive }) => (
                <div className={styles.item}>
                  <AnimatePresence>
                    {isActive && (
                      <div className={styles.showcase}>
                        <Frame>
                          <img src={feature.frame} alt={feature.title} />
                          {feature.showcase}
                        </Frame>
                      </div>
                    )}
                  </AnimatePresence>
                  <div className={styles.content}>
                    <div className={styles.label}>{feature.label}</div>
                    <h2 className={styles.title}>{feature.title}</h2>
                    <p className={styles.desc}>{feature.desc}</p>
                    <button className={styles.btn}>Learn More</button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.thumbs}>
        <div className={styles.container}>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            slidesPerView={'auto'}
            watchSlidesProgress={true}
            /*
              May be useful for mobile devices
              allowTouchMove={false}
            */
            breakpoints={{
              1024: {
                slidesPerView: 5,
                allowTouchMove: true,
              },
            }}
          >
            {featuresData.map((feature, index) => {
              const isActive = activeSlideIndex === index;

              return (
                <SwiperSlide
                  key={`thumb-${index}`}
                  className={clsx(styles.thumb, {
                    [styles['thumb-active']]: isActive,
                  })}
                >
                  <div className={styles.icon}>
                    {feature.icon}
                    <AnimatePresence>
                      {isActive && <Checkmark />}
                    </AnimatePresence>
                  </div>
                  <div>{feature.label}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Frame: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <motion.div
      initial={{
        y: '100%',
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: '100%',
      }}
      transition={{
        type: 'tween',
        duration: 1,
      }}
      className={styles.frame}
      {...props}
    />
  );
};

const Checkmark = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58 58"
    className={styles.checkmark}
  >
    <motion.circle
      initial={{
        pathLength: 0,
        rotate: -90,
        scaleX: -1,
      }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 0.75,
      }}
      exit={{
        pathLength: 0,
      }}
      cx="29"
      cy="29"
      r="28"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);
