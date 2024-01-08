'use client';

import React from 'react';
import Link from 'next/link';
import H2, { TitleType, TitleColorType } from '@/app/components/shared/h2/H2';
import styles from './welcome-greetings.module.scss';

function WelcomeGreetings({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return null;
  }

  return (
    <div className={styles.welcome__greeting}>
      <H2 type={TitleType.REGULAR} colorType={TitleColorType.LIGHT}>
        Welcome
        <br />
        to the Louvre
      </H2>
      <p className={styles.welcome__addition}>From the castle to the museum</p>
      <Link
        href="/about"
        target="_blank"
        className={styles.welcome__button_main}
      >
        Discover the Louvre
      </Link>
    </div>
  );
}

export default WelcomeGreetings;
