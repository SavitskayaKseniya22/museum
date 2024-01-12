/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './welcome-slider.module.scss';

const images = [
  '/img/welcome/img-1.jpg',
  '/img/welcome/img-2.jpg',
  '/img/welcome/img-3.jpg',
  '/img/welcome/img-4.jpg',
  '/img/welcome/img-5.jpg',
];

enum AnimationType {
  'LEFT',
  'RIGHT',
}

function WelcomeSlider() {
  const [slide, setSlide] = useState({
    active: 0,
    next: 1,
    prev: 5,
  });

  const [onTransition, setOnTransition] = useState<AnimationType | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (onTransition !== null) {
      timeout = setTimeout(() => {
        const ref = onTransition;
        setOnTransition(null);
        if (ref === AnimationType.LEFT) {
          setSlide((a) => {
            const next = a.active < images.length - 1 ? a.active + 1 : 0;
            const nextNext = next < images.length - 1 ? next + 1 : 0;
            return { active: next, next: nextNext, prev: a.active };
          });
        } else {
          setSlide((a) => {
            const prev = a.active > 0 ? a.active - 1 : images.length - 1;
            const prevPrev = prev > 0 ? prev - 1 : images.length - 1;
            return { active: prev, next: a.active, prev: prevPrev };
          });
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [onTransition]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (onTransition === null) {
        setOnTransition(AnimationType.LEFT);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [onTransition]);

  return (
    <div className={styles.welcome__slider}>
      <div className={styles.slider__container}>
        <ul
          className={`${styles.slider__content} ${
            onTransition === AnimationType.LEFT
              ? styles.slider__onTransition_left
              : ''
          }  ${
            onTransition === AnimationType.RIGHT
              ? styles.slider__onTransition_right
              : ''
          }`}
        >
          <li>
            <Image src={images[slide.prev]} fill alt="Carousel image" />
          </li>
          <li>
            <Image src={images[slide.active]} fill alt="Carousel image" />
          </li>
          <li>
            <Image src={images[slide.next]} fill alt="Carousel image" />
          </li>
        </ul>
      </div>

      <div className={styles.slider__controls}>
        <div>
          <span>{slide.active + 1}</span>
          <span> | </span>
          <span>{images.length}</span>
        </div>

        <div className={styles.slider__paginator}>
          <button
            type="button"
            className={`${slide.active === 0 ? styles.slide_active : ''} ${
              styles.slide
            }`}
            onClick={() => {
              setSlide({ active: 0, next: 1, prev: 5 });
            }}
            disabled={onTransition !== null}
          />
          <button
            type="button"
            className={`${slide.active === 1 ? styles.slide_active : ''} ${
              styles.slide
            }`}
            onClick={() => {
              setSlide({ active: 1, next: 2, prev: 0 });
            }}
            disabled={onTransition !== null}
          />
          <button
            type="button"
            className={`${slide.active === 2 ? styles.slide_active : ''} ${
              styles.slide
            }`}
            onClick={() => {
              setSlide({ active: 2, next: 3, prev: 1 });
            }}
            disabled={onTransition !== null}
          />
          <button
            type="button"
            className={`${slide.active === 3 ? styles.slide_active : ''} ${
              styles.slide
            }`}
            onClick={() => {
              setSlide({ active: 3, next: 4, prev: 2 });
            }}
            disabled={onTransition !== null}
          />
          <button
            type="button"
            className={`${slide.active === 4 ? styles.slide_active : ''} ${
              styles.slide
            }`}
            onClick={() => {
              setSlide({ active: 4, next: 0, prev: 3 });
            }}
            disabled={onTransition !== null}
          />
        </div>

        <div className={styles.slider__arrows}>
          <button
            type="button"
            onClick={() => {
              setOnTransition(AnimationType.RIGHT);
            }}
            disabled={onTransition !== null}
          >
            <Image
              src="/svg/icon-arrow-welcome-left.svg"
              fill
              alt="Arrow to the left"
            />
          </button>

          <button
            type="button"
            onClick={() => {
              setOnTransition(AnimationType.LEFT);
            }}
            disabled={onTransition !== null}
          >
            <Image
              src="/svg/icon-arrow-welcome-right.svg"
              fill
              alt="Arrow to the right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSlider;
