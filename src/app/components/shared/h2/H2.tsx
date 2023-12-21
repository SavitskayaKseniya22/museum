'use client';

import React, { ReactNode } from 'react';
import styles from './h2.module.scss';

export enum TitleType {
  UNDERLINED = 'underlined',
  REGULAR = 'regular',
}

export enum TitleColorType {
  DARK = 'dark',
  GOLD = 'gold',
  LIGHT = 'light',
}

function H2({
  children,
  type,
  colorType,
}: {
  children: ReactNode;
  type: TitleType;
  colorType: TitleColorType;
}) {
  return (
    <h2 className={`${styles.h2} ${styles[type]} ${styles[colorType]}`}>
      {children}
    </h2>
  );
}

export default H2;
