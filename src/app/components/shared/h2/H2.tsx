'use client';

import React, { ReactNode } from 'react';
import styles from './h2.module.scss';

function H2({ children }: { children: ReactNode }) {
  return <h2 className={styles.h2}>{children}</h2>;
}

export default H2;
