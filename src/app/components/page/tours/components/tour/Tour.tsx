import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import H3 from '@/app/components/shared/h3/H3';
import styles from './tour.module.scss';

export interface TourType {
  name: string;
  preview: string;
  link: string;
  i: number;
}

function Tour({ tour }: { tour: TourType }) {
  return (
    <Link href={`/map/${tour.i}`} scroll={false}>
      <figure className={styles.tour__content}>
        <Image
          src={tour.preview}
          width={440}
          height={285}
          alt={tour.name}
          className={styles.tour__preview}
        />

        <figcaption className={styles.tour__caption}>
          <H3 className={styles.tour__title}>{tour.name}</H3>
          <span className={styles.tour__caption_main}>360° Virtual Tour</span>
          <span className={styles.tour__caption_addition}>
            Google Street Panorama View
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default Tour;
