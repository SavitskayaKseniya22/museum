/* eslint-disable react/require-default-props */

'use client';

import React, { ReactNode } from 'react';
import styles from './h4.module.scss';

function H4({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4 className={`${styles.h4} ${className}`}>
      <b>{children}</b>
    </h4>
  );
}

export default H4;
