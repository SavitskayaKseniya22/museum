'use client';

import React from 'react';
import Link from 'next/link';
import styles from './welcome.module.scss';
import Logo from '../../shared/logo/Logo';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import WelcomeSlider from './components/welcome-slider/WelcomeSlider';
import WelcomeBurger from './components/welcome-burger/WelcomeBurger';

function Welcome() {
  return (
    <section className={styles.welcome} id="Welcome">
      <div className={`${styles.container} container`}>
        <header className={styles.welcome__header}>
          <Logo />
          <ul className={styles.header__navigation}>
            <li>
              <Link href="#visiting" className={styles.header__link}>
                Visiting
              </Link>
            </li>
            <li>
              <Link href="#Explore" className={styles.header__link}>
                Explore
              </Link>
            </li>
            <li>
              <Link href="#Video" className={styles.header__link}>
                Video
              </Link>
            </li>
            <li>
              <Link href="#Gallery" className={styles.header__link}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#Tickets" className={styles.header__link}>
                Tickets
              </Link>
            </li>
            <li>
              <Link href="#Contacts" className={styles.header__link}>
                Contacts
              </Link>
            </li>
          </ul>
          <div className={styles.header__burger} />
        </header>
        <div className={styles.welcome__content}>
          <div className={styles.welcome__greeting}>
            <H2 type={TitleType.REGULAR} colorType={TitleColorType.LIGHT}>
              Welcome
              <br />
              to the Louvre
            </H2>
            <p className={styles.welcome__addition}>
              From the castle to the museum
            </p>
            <Link
              href="/about"
              target="_blank"
              className={styles.welcome__button_main}
            >
              Discover the Louvre
            </Link>
          </div>
          <WelcomeSlider />
        </div>
        <WelcomeBurger />
      </div>
    </section>
  );
}

export default Welcome;
