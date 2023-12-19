'use client';

import React from 'react';
import Image from 'next/image';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/svg/Logo.svg"
        width={49}
        height={26}
        alt="Logo triangle"
        className={styles.logo__image}
      />
      <h1 className={styles.logo__title}>Louvre</h1>
    </div>
  );
}

export default Logo;
