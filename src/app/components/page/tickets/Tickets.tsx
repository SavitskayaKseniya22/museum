'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './tickets.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import H4 from '../../shared/h4/H4';
import Button, { ButtonType } from '../../shared/button/Button';
import Counter, { CounterType } from './components/counter/Counter';

function Tickets() {
  return (
    <section className={styles.tickets} id="Tickets">
      <div className={`${styles.container} container`}>
        <H2
          type={TitleType.UNDERLINED}
          colorType={TitleColorType.GOLD}
          className={styles.title__h2}
        >
          Buy tickets
        </H2>

        <div className={styles.container__image}>
          <Image src="/img/img-tickets.jpg" fill alt="Piece of art" />
        </div>

        <div className={styles.content}>
          <div className={styles['ticket-type']}>
            <H4>Ticket Type</H4>

            <ul className={styles['ticket-type__list']}>
              <li>
                <label htmlFor="Permanent">
                  <input
                    type="radio"
                    name="tickets-type"
                    id="Permanent"
                    checked
                  />
                  Permanent exhibition
                </label>
              </li>
              <li>
                <label htmlFor="Temporary">
                  <input type="radio" name="tickets-type" id="Temporary" />
                  Temporary exhibition
                </label>
              </li>
              <li>
                <label htmlFor="Combined">
                  <input type="radio" name="tickets-type" id="Combined" />
                  Combined Admission
                </label>
              </li>
            </ul>
          </div>

          <div className={styles.amount}>
            <H4>Amount</H4>

            <ul className={styles.counters}>
              <li>
                <p>Basic 18+</p>
                <Counter counterType={CounterType.LIGHT} />
              </li>
              <li>
                <p>Senior 65+</p>
                <Counter counterType={CounterType.LIGHT} />
              </li>
            </ul>

            <H4>Total € 0</H4>

            <Button buttonType={ButtonType.SUB}>
              <Link href="./tickets">Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tickets;
