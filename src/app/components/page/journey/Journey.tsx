'use client';

import React from 'react';
import Image from 'next/image';
import styles from './journey.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import Player from './components/player/Player';

function Journey() {
  return (
    <section className={styles.journey} id="Video">
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <H2 type={TitleType.REGULAR} colorType={TitleColorType.GOLD}>
            Video journey
          </H2>
          <p>
            Enter and visit one of the most famous museums in the world and
            enjoy masterpieces such as Mona Lisa or Hammurabi&apos;s Code
          </p>
        </div>

        <div className={styles.slider}>
          <Player />

          <ul className={styles.slider__content}>
            <li className={styles.slider__item}>
              <iframe
                src="https://www.youtube.com/embed/zp1BXPX8jcU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-block w-100"
              />
            </li>
            <li className={styles.slider__item}>
              <iframe
                src="https://www.youtube.com/embed/zp1BXPX8jcU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-block w-100"
              />
            </li>
            <li className={styles.slider__item}>
              <iframe
                src="https://www.youtube.com/embed/zp1BXPX8jcU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-block w-100"
              />
            </li>
          </ul>

          <div className={styles.slider__controls}>
            <button type="button">
              <Image
                src="/svg/icon-arrow_left.svg"
                width={10}
                height={10}
                alt="Arrow to the left"
              />
            </button>
            <ul className={styles.slider__paginator}>
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <button type="button">
              <Image
                src="/svg/icon-arrow_right.svg"
                width={10}
                height={10}
                alt="Arrow to the right"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
