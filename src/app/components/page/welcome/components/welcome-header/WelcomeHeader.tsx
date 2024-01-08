/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import Logo from '@/app/components/shared/logo/Logo';
import styles from './welcome-header.module.scss';
import BurgerContext from '../context';

function WelcomeHeader() {

  const {isOpen, setIsOpen} = useContext(BurgerContext);

  return (
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
      <button
        type="button"
        className={`${styles.header__burger} ${
          isOpen ? styles.header__burger_verical : ''
        }`}
        onClick={() => {
          setIsOpen((a) => !a);
        }}
      />
    </header>
  );
}

export default WelcomeHeader;
