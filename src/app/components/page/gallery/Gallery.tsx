import React from 'react';
import Image from 'next/image';
import styles from './gallery.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';

export function shuffle<T>(array: Array<T>) {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

function Gallery() {
  return (
    <section className={styles.gallery} id="Gallery">
      <div className={`${styles.gallery__container} container`}>
        <H2 colorType={TitleColorType.LIGHT} type={TitleType.REGULAR}>
          Art Gallery
        </H2>
        <ul className={styles.gallery__list}>
          {shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
            .slice(0, 12)
            .map((item) => (
              <li>
                <Image
                  src={`/img/gallery/img-${item}.jpg`}
                  alt="Picture from Louvre"
                  width={440}
                  height={300}
                  quality={100}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
