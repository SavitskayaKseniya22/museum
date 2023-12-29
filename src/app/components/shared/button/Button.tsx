/* eslint-disable react/require-default-props */

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
  className = '',
}: {
  children: ReactNode;
  buttonType: ButtonType;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[buttonType]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
