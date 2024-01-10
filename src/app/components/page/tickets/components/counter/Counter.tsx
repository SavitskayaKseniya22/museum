/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import styles from './counter.module.scss';

export enum CounterType {
  'LIGHT' = 'light',
  'DARK' = 'dark',
}

export enum CounterNameType {
  'BASIC' = 'basic',
  'SENIOR' = 'senior',
}

function Counter({
  counterType,
  counterName,
}: {
  counterType: CounterType;
  counterName: CounterNameType;
}) {
  const { register, setValue, watch } = useFormContext();

  const counter = watch(counterName);

  return (
    <div className={`${styles.counter} ${styles[counterType]}`}>
      <button
        type="button"
        className={styles.counter__control}
        onClick={() => {
          if (counter > 0) {
            setValue(counterName, counter - 1);
          }
        }}
      >
        {counterType === CounterType.LIGHT ? (
          <Image src="/svg/icon-minus.svg" width={17} height={17} alt="Minus" />
        ) : (
          <Image
            src="/svg/icon-minus-white.svg"
            width={17}
            height={17}
            alt="Minus"
          />
        )}
      </button>

      <input
        type="number"
        value={counter}
        min="0"
        max="100"
        className={styles.counter__value}
        {...register(counterName)}
      />

      <button
        type="button"
        className={styles.counter__control}
        onClick={() => {
          setValue(counterName, counter + 1);
        }}
      >
        {counterType === CounterType.LIGHT ? (
          <Image src="/svg/icon-plus.svg" width={17} height={17} alt="Plus" />
        ) : (
          <Image
            src="/svg/icon-plus-white.svg"
            width={17}
            height={17}
            alt="Plus"
          />
        )}
      </button>
    </div>
  );
}

export default Counter;
