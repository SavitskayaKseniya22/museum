import React from 'react';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import styles from './explore.module.scss';
import Comparition from './components/comparison/Comparison';

function Explore() {
  return (
    <section className={styles.explore} id="Explore">
      <div className={`${styles.explore__container} container`}>
        <div className={styles.explore__content}>
          <H2 colorType={TitleColorType.LIGHT} type={TitleType.UNDERLINED}>
            Picture explore
          </H2>

          <div className={styles.explore__info}>
            <p>
              Las Meninas is a 1656 painting by Diego Velázquez, the leading
              artist of the Spanish Golden Age.
            </p>
            <p>
              It was cleaned in 1984 to remove a{' '}
              <span className={styles.explore__info_emphasis}>
                &apos;yellow veil&apos;
              </span>{' '}
              of dust that had gathered since the previous restoration in the
              19th century.
            </p>
            <p>
              The cleaning provoked furious protests, not because the picture
              had been damaged in any way, but because it looked different.
            </p>
          </div>
        </div>
        <Comparition />
      </div>
    </section>
  );
}

export default Explore;
