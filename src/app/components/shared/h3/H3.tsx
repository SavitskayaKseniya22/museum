'use client';

import React, { ReactNode } from 'react';
import styles from './h3.module.scss';

function H3({ children }: { children: ReactNode }) {
  return <h3 className={styles.h3}>{children}</h3>;
}

export default H3;
