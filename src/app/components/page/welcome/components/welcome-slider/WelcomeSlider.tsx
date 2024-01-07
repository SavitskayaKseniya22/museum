'use client';

import React from 'react';
import Image from 'next/image';
import styles from './welcome-slider.module.scss';

function WelcomeSlider() {
  return (
    <div className={styles.welcome__slider}>
      <ul className={styles.slider__content}>
        <li>
          <Image src="/img/welcome/img-1.jpg" fill alt="Carousel image" />
        </li>
        <li>
          <Image src="/img/welcome/img-1.jpg" fill alt="Carousel image" />
        </li>
        <li>
          <Image src="/img/welcome/img-1.jpg" fill alt="Carousel image" />
        </li>
        <li>
          <Image src="/img/welcome/img-1.jpg" fill alt="Carousel image" />
        </li>
        <li>
          <Image src="/img/welcome/img-1.jpg" fill alt="Carousel image" />
        </li>
      </ul>

      <div className={styles.slider__controls}>
        <div>
          <span>01</span>
          <span> | </span>
          <span>05</span>
        </div>

        <ul className={styles.slider__paginator}>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>

        <div className={styles.slider__arrows}>
          <button type="button">
            <Image
              src="/svg/icon-arrow-welcome-left.svg"
              fill
              alt="Arrow to the left"
              objectFit="contain"
            />
          </button>

          <button type="button">
            <Image
              src="/svg/icon-arrow-welcome-right.svg"
              fill
              alt="Arrow to the right"
              objectFit="contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSlider;
