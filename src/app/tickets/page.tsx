/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Counter, {
  CounterType,
} from '../components/page/tickets/components/counter/Counter';
import Button, { ButtonType } from '../components/shared/button/Button';
import Card from './components/card/Card';
import H2, { TitleColorType, TitleType } from '../components/shared/h2/H2';
import H5 from '../components/shared/h5/H5';
import H4 from '../components/shared/h4/H4';

function Order() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container_form}>
          <div className={styles.header}>
            <Image
              src="/img/img-triangle.png"
              width={85}
              height={41}
              alt="Triangle"
            />
            <H2
              colorType={TitleColorType.GOLD}
              type={TitleType.REGULAR}
              className={styles.header__title}
            >
              booking tickets
            </H2>
            <p className={styles.header__addition}>Tour to Louvre</p>
          </div>

          <ul className={styles.form__list}>
            <li>
              <Image
                src="/svg/icon-date.svg"
                width={15}
                height={15}
                alt="Date"
              />
              <input type="date" name="date" />
              <Image
                src="/svg/icon-arrow.svg"
                width={15}
                height={15}
                alt="Arrow"
              />
            </li>
            <li>
              <Image
                src="/svg/icon-time.svg"
                width={15}
                height={15}
                alt="Time"
              />
              <select name="chooseTime" size={1}>
                <option value="9:00" selected>
                  9:00
                </option>
                <option value="9:30">9:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
              </select>
              <Image
                src="/svg/icon-arrow.svg"
                width={15}
                height={15}
                alt="Arrow"
              />
            </li>
            <li>
              <Image
                src="/svg/icon-name.svg"
                width={15}
                height={15}
                alt="Name"
              />
              <input type="text" name="name" placeholder="Name" />
            </li>
            <li>
              <Image
                src="/svg/icon-email.svg"
                width={15}
                height={15}
                alt="Email"
              />
              <input type="email" name="email" placeholder="E-mail" />
            </li>
            <li>
              <Image
                src="/svg/icon-phone.svg"
                width={15}
                height={15}
                alt="Phone"
              />
              <input type="tel" name="phone" placeholder="Phone" />
            </li>

            <li>
              <Image
                src="/svg/icon-ballot.svg"
                width={15}
                height={15}
                alt="Ballot"
              />
              <select name="select" size={1}>
                <option value="Permanent" selected>
                  Permanent exhibition
                </option>
                <option value="Temporary">Temporary exhibition</option>
                <option value="Combined">Combined Admission</option>
              </select>

              <Image
                src="/svg/icon-arrow.svg"
                width={15}
                height={15}
                alt="Arrow"
              />
            </li>

            <li className={styles.counters}>
              <H5>Entry Ticket</H5>

              <ul className={styles.counter__list}>
                <li className={styles.counter}>
                  <div>Basic 18+ (20€)</div>
                  <Counter counterType={CounterType.DARK} />
                </li>
                <li className={styles.counter}>
                  <div>Senior 65+ (0€)</div>
                  <Counter counterType={CounterType.DARK} />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.container_result}>
          <div className={styles.overview}>
            <Image
              src="/img/img-louvre.png"
              width={150}
              height={120}
              alt="Louvre"
              className={styles['overview__back-image']}
            />
            <H4>Overview</H4>
            <p>Tour to Louvre</p>
            <ul className={styles.summary__list}>
              <li className={styles.summary}>
                <Image
                  src="/svg/icon-date.svg"
                  width={15}
                  height={15}
                  alt="Date"
                />
                Friday, August 19
              </li>
              <li className={styles.summary}>
                <Image
                  src="/svg/icon-time.svg"
                  width={15}
                  height={15}
                  alt="Date"
                />
                <span>16 : 30</span>
              </li>
              <li className={styles.summary}>
                <Image
                  src="/svg/icon-circle.svg"
                  width={15}
                  height={15}
                  alt="Date"
                />
                Temporary exhibition
              </li>
            </ul>

            <ul className={styles.note}>
              <li>
                <div className={styles.amount}>0</div>
                <span className={styles.price}>Basic (20€)</span>
                <span>0€</span>
              </li>
              <li>
                <div className={styles.amount}>0</div>
                <span className={styles.price}>Senior (10€)</span>
                <span>0€</span>
              </li>
            </ul>

            <div className={styles.bill}>
              Total:
              <span>0€</span>
            </div>
          </div>

          <Card />

          <Button
            buttonType={ButtonType.SUB}
            className={styles.overview__button}
          >
            Book
          </Button>
        </div>
      </div>
    </main>
  );
}
export default Order;
