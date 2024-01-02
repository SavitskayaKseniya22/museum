/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Inputs } from '@/app/interfaces';
import styles from './card.module.scss';

function Card() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div className={styles.card__container}>
      <div className={`${styles.card} ${styles.card_front}`}>
        <label className={styles.card__number}>
          Card number
          <input
            type="text"
            placeholder={errors?.card__number?.message || 'Card number'}
            {...register('card__number', {
              required: {
                value: true,
                message: 'It is required',
              },
            })}
          />
        </label>

        <label className={styles.card__exp}>
          Expiration date
          <div className={styles['card__exp-list']}>
            <input
              type="text"
              placeholder={errors?.card__exp_month?.message || 'Month'}
              {...register('card__exp_month', {
                required: {
                  value: true,
                  message: 'It is required',
                },
              })}
            />
            <input
              type="text"
              placeholder={errors?.card__exp_year?.message || 'Year'}
              {...register('card__exp_year', {
                required: {
                  value: true,
                  message: 'It is required',
                },
              })}
            />
          </div>
        </label>

        <label className={styles.card__name}>
          Cardholder name
          <input
            type="text"
            placeholder={errors?.card__name?.message || 'Name'}
            {...register('card__name', {
              required: {
                value: true,
                message: 'Required',
              },
            })}
          />
        </label>
      </div>

      <div className={`${styles.card} ${styles.card_back}`}>
        <div className={styles.card_back__container}>
          <label>
            CVC/CVV
            <input
              type="text"
              placeholder={errors?.cvv?.message || 'CVV'}
              {...register('cvv', {
                required: {
                  value: true,
                  message: 'Required',
                },
              })}
            />
          </label>

          <p>The last 3 or 4 digits on back of the card</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
