/* eslint-disable react/require-default-props */

'use client';

import React, { ReactNode } from 'react';
import styles from './h3.module.scss';

function H3({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={`${styles.h3} ${className}`}>{children}</h3>;
}

export default H3;
