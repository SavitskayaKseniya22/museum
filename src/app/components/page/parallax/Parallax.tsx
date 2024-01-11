import React from 'react';
import Image from 'next/image';
import styles from './parallax.module.scss';

function Parallax() {
  return (
    <div className={styles.parallax}>
      <Image
        src="/img/img-parallax.jpg"
        fill
        alt="Louvre"
        quality={100}
        className={styles.parallax__image}
      />
    </div>
  );
}

export default Parallax;
