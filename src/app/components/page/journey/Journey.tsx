'use client';

import React from 'react';
import styles from './journey.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import JourneySlider from './components/journey-slider/JourneySlider';

const videoArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <JourneySlider content={videoArray} />
      </div>
    </section>
  );
}

export default Journey;
