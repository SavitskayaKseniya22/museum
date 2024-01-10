/* eslint-disable react/require-default-props */

import React, { ReactNode } from 'react';
import { Forum } from 'next/font/google';
import styles from './h2.module.scss';

const forum = Forum({ weight: '400', subsets: ['latin'], style: 'normal' });

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
  className = '',
}: {
  children: ReactNode;
  type: TitleType;
  colorType: TitleColorType;
  className?: string;
}) {
  return (
    <h2
      className={`${styles.h2} ${forum.className} ${styles[type]} ${styles[colorType]} ${className}`}
    >
      {children}
    </h2>
  );
}

export default H2;
