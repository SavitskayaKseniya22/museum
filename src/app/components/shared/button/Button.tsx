'use client';

import React, { ReactNode } from 'react';
import styles from './button.module.scss';

export enum ButtonType {
  MAIN = 'main',
  SUB = 'sub',
}

function Button({
  children,
  buttonType,
}: {
  children: ReactNode;
  buttonType: ButtonType;
}) {
  return (
    <button type="button" className={`${styles.button} ${styles[buttonType]}`}>
      {children}
    </button>
  );
}

export default Button;
