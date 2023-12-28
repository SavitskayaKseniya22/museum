/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import styles from './card.module.scss';

function Card() {
  return (
    <div className={styles.card__container}>
      <div className={`${styles.card} ${styles.card_front}`}>
        <label className={styles.card__number}>
          Card number
          <input type="text" name="card__number" />
        </label>

        <label className={styles.card__exp}>
          Expiration date
          <div className={styles['card__exp-list']}>
            <input type="number" name="card__exp_month" />
            <input type="number" name="card__exp_year" />
          </div>
        </label>

        <label className={styles.card__name}>
          Cardholder name
          <input type="text" name="card__name" />
        </label>
      </div>

      <div className={`${styles.card} ${styles.card_back}`}>
        <div className={styles.card_back__container}>
          <label>
            CVC/CVV
            <input type="text" name="cvv" />
          </label>

          <p>The last 3 or 4 digits on back of the card</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
