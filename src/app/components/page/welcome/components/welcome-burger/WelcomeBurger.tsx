'use client';

import React from 'react';
import Link from 'next/link';
import SocialsList from '@/app/components/shared/socials-list/SocialsList';
import Image from 'next/image';
import styles from './welcome-burger.module.scss';

function WelcomeBurger({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.welcome__content_burger}>
      <ul className={styles.burger__navigation}>
        <li>
          <Link href="#visiting" className={styles.burger__link}>
            Visiting
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
        <li>
          <Link href="#Explore" className={styles.burger__link}>
            Explore
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
        <li>
          <Link href="#Video" className={styles.burger__link}>
            Video
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
        <li>
          <Link href="#Gallery" className={styles.burger__link}>
            Gallery
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
        <li>
          <Link href="#Tickets" className={styles.burger__link}>
            Tickets
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
        <li>
          <Link href="#Contacts" className={styles.burger__link}>
            Contacts
            <Image
              src="/svg/icon-arrow_nav.svg"
              width={12}
              height={12}
              alt="Picture of the author"
            />
          </Link>
        </li>
      </ul>

      <div className={styles.burger__images}>
        <div
          className={`${styles['image-container']} ${styles['image-container_first']}`}
        >
          <Image
            src="/img/burger/img-1.jpg"
            fill
            alt="Louvre"
            objectFit="cover"
          />
        </div>

        <div
          className={`${styles['image-container']} ${styles['image-container_second']}`}
        >
          <Image
            src="/img/burger/img-2.jpg"
            fill
            alt="Cupola"
            objectFit="cover"
          />
        </div>
        <div
          className={`${styles['image-container']} ${styles['image-container_third']}`}
        >
          <Image
            src="/img/burger/img-3.jpg"
            fill
            alt="Triangle"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={styles.welcome__socials}>
        <SocialsList />
      </div>
    </div>
  );
}

export default WelcomeBurger;
