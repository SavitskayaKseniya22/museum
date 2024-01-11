/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React, { useContext } from 'react';
import Logo from '@/app/components/shared/logo/Logo';
import Navigation from '@/app/components/shared/navigation/Navigation';
import styles from './welcome-header.module.scss';
import BurgerContext from '../context';

function WelcomeHeader() {
  const { isOpen, setIsOpen } = useContext(BurgerContext);

  return (
    <header className={styles.welcome__header}>
      <Logo />
      <Navigation className={styles.header__nav} />

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
