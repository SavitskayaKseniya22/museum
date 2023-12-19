'use client';

import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../shared/logo/Logo';
import Navigation from '../../shared/navigation/Navigation';
import SocialsList from '../../shared/socials-list/SocialsList';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <Logo />
        <nav>
          <Navigation place="footer" />
          <SocialsList />
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
