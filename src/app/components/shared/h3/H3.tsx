/* eslint-disable react/require-default-props */

import React, { ReactNode } from 'react';
import { Forum } from 'next/font/google';
import styles from './h3.module.scss';

const forum = Forum({ weight: '400', subsets: ['latin'], style: 'normal' });

function H3({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`${styles.h3} ${forum.className} ${className}`}>
      {children}
    </h3>
  );
}

export default H3;
