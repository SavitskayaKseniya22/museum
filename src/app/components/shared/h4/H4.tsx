'use client';

import React, { ReactNode } from 'react';
import styles from './h4.module.scss';

function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className={styles.h4}>
      <b>{children}</b>
    </h4>
  );
}

export default H4;
