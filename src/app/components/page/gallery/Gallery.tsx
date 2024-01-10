import React from 'react';
import styles from './gallery.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';

function Gallery() {
  return (
    <section className={styles.gallery} id="Gallery">
      <div className={`${styles.container} container`}>
        <H2 colorType={TitleColorType.LIGHT} type={TitleType.REGULAR}>
          Art Gallery
        </H2>
        <ul className={styles.gallery__list}>
          <li />
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
