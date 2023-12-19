'use client';

import React, { ReactNode } from 'react';
import styles from './button.module.scss';

function Button({ children }: { children: ReactNode }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
