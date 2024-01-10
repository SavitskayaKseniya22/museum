'use client';

import React from 'react';
import Link from 'next/link';
import styles from './contacts.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import H4 from '../../shared/h4/H4';
import Map from './components/map/Map';

function Contacts() {
  return (
    <section className={styles.contacts} id="Contacts">
      <div className={`${styles.container} container`}>
        <H2
          type={TitleType.UNDERLINED}
          colorType={TitleColorType.GOLD}
          className={styles.title__h2}
        >
          CONTACTS
        </H2>

        <div className={styles.content}>
          <H4>
            Palais Royal
            <br />
            Musee du Louvre
          </H4>

          <ul className={styles.contacts__list}>
            <li>
              <Link
                href="https://www.google.com/maps/place/%D0%9B%D1%83%D0%B2%D1%80/@48.8606111,2.337644,15z/data=!4m6!3m5!1s0x47e671d877937b0f:0xb975fcfa192f84d4!8m2!3d48.8606111!4d2.337644!16zL20vMDRnZHI?entry=ttu"
                target="_blank"
              >
                address: 75001 Paris, France
              </Link>
            </li>

            <li>
              <Link href="tel:+33(0)140205050">
                phone: +33(0) 1 40 20 50 50
              </Link>
            </li>
            <li>
              <Link href="mailto:info@louvre.fr">mail: info@louvre.fr</Link>
            </li>
          </ul>
        </div>

        <Map />
      </div>
    </section>
  );
}

export default Contacts;
