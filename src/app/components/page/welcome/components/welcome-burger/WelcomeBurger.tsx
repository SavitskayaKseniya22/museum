import React, { useEffect, useState } from 'react';
import SocialsList from '@/app/components/shared/socials-list/SocialsList';
import Image from 'next/image';
import Navigation from '@/app/components/shared/navigation/Navigation';
import styles from './welcome-burger.module.scss';

function WelcomeBurger({ isOpen }: { isOpen: boolean }) {
  const [onTransition, setOnTransition] = useState<boolean | null>(null);

  useEffect(() => {
    if (isOpen) {
      setOnTransition(true);
    } else {
      setOnTransition((a) => (a === null ? null : false));
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.welcome__content_burger} ${
        onTransition ? styles.open : ''
      }  ${onTransition === false ? styles.close : ''}`}
    >
      <Navigation className={styles.burger__nav} />

      <div className={styles.burger__images}>
        <div
          className={`${styles['image-container']} ${styles['image-container_first']}`}
        >
          <Image src="/img/burger/img-1.jpg" fill alt="Louvre" />
        </div>

        <div
          className={`${styles['image-container']} ${styles['image-container_second']}`}
        >
          <Image src="/img/burger/img-2.jpg" fill alt="Cupola" />
        </div>
        <div
          className={`${styles['image-container']} ${styles['image-container_third']}`}
        >
          <Image src="/img/burger/img-3.jpg" fill alt="Triangle" />
        </div>
      </div>

      <SocialsList className={styles.welcome__socials} />
    </div>
  );
}

export default WelcomeBurger;
