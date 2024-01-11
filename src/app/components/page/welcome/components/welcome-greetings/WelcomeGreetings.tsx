import React from 'react';
import Link from 'next/link';
import H2, { TitleType, TitleColorType } from '@/app/components/shared/h2/H2';
import styles from './welcome-greetings.module.scss';

function WelcomeGreetings({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={styles.welcome__greeting}
      style={{ opacity: isOpen ? 0 : 1 }}
    >
      <H2 type={TitleType.REGULAR} colorType={TitleColorType.LIGHT}>
        Welcome
        <br />
        to the Louvre
      </H2>
      <p className={styles.welcome__addition}>From the castle to the museum</p>
      <Link
        href="/map/6"
        className={styles.welcome__button_main}
        passHref
        scroll={false}
      >
        Discover the Louvre
      </Link>
    </div>
  );
}

export default WelcomeGreetings;
