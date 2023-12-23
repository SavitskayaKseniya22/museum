'use client';

import React from 'react';
import Image from 'next/image';
import styles from './counter.module.scss';

export enum CounterType {
  'LIGHT' = 'light',
  'DARK' = 'dark',
}

function Counter({ counterType }: { counterType: CounterType }) {
  return (
    <div className={`${styles.counter} ${styles[counterType]}`}>
      <button type="button" className={styles.counter__control}>
        <Image src="/svg/icon-minus.svg" width={17} height={17} alt="Minus" />
      </button>

      <input
        type="number"
        value="0"
        min="1"
        max="100"
        className={styles.counter__value}
      />

      <button type="button" className={styles.counter__control}>
        <Image src="/svg/icon-plus.svg" width={17} height={17} alt="Plus" />
      </button>
    </div>
  );
}

export default Counter;
