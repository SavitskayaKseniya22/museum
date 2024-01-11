import React from 'react';
import styles from './tours.module.scss';
import Tour from './components/tour/Tour';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';

export const tours = [
  {
    name: 'Royal Palace',
    i: 0,
    preview: '/img/tour/img-royal-palace.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632585454340!6m8!1m7!1sCAoSLEFGMVFpcE1aOVlnbkFyYndFSWJUREFOZVNRWUZ1OWdOcXBXXzJTdjhGQnZZ!2m2!1d48.8606881835717!2d2.335679134426641!3f328.36!4f-2.450000000000003!5f0.4000000000000002',
  },
  {
    name: 'Denon Wing',
    i: 1,
    preview: '/img/tour/img-denon-wing.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632585412829!6m8!1m7!1sCAoSLEFGMVFpcE5Sal9Dd1A0Y29ETVlkQ0hqNnFIZUJlSnBJMlZ4VTVCVXNPWDRG!2m2!1d48.8563254!2d2.3352706!3f0!4f0!5f0.7820865974627469',
  },
  {
    name: 'Colonnade Perrault',
    i: 2,
    preview: '/img/tour/img-colonnade-perrault.jpg',

    link: 'https://www.google.com/maps/embed?pb=!4v1632585394853!6m8!1m7!1sCAoSLEFGMVFpcE5NWkdRdUVBLXBBVXZJR19lUF8yZjNnV1RLWkVKNlhMVkotUGdi!2m2!1d48.8601723!2d2.3395439!3f322.04!4f-5.75!5f0.440292882915489',
  },
  {
    name: 'Greek hall',
    i: 3,
    preview: '/img/tour/img-greek-hall.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632585378362!6m8!1m7!1sCAoSLEFGMVFpcFA3dUZablRJVFJlLTdBRVZBZ0hBZnFpQ0wtMDNndkJIY1lXZ0Yz!2m2!1d48.86018303140322!2d2.335615591987402!3f177.69!4f5.609999999999999!5f0.4000000000000002',
  },
  {
    name: 'Mona Lisa',
    i: 4,
    preview: '/img/tour/img-mona-lisa.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632585364852!6m8!1m7!1sCAoSLEFGMVFpcE8xd2tVVWJ5enBQamotT1IwbVI1ZXRaSlQteGwtNDBYSzhyRFEz!2m2!1d48.85987877384653!2d2.335515730085149!3f7.53!4f4!5f0.5970117501821992',
  },
  {
    name: 'Night Palace',
    i: 5,
    preview: '/img/tour/img-night-palace.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632585350998!6m8!1m7!1sCAoSLEFGMVFpcFBwR0Fvd1lhdFZ5azNNTUduWkFhUWtZbTJFVWstRGxjYTA2U1M1!2m2!1d48.8563254!2d2.3352706!3f21.26!4f-10.090000000000003!5f0.4000000000000002',
  },
  {
    name: 'Court inside',
    i: 6,
    preview: '/img/tour/img-night-palace.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1632584932749!6m8!1m7!1sCAoSLEFGMVFpcE9WeFpRdVN5M0J4OVRfSHBIXzdGdEJIRFRYdkk2U0YtQTEwb2NU!2m2!1d48.86181593314584!2d2.336681797486702!3f81.55!4f-16.599999999999994!5f0.7820865974627469',
  },
];

function Tours() {
  return (
    <section id="Tours">
      <div className={`${styles.tours__container} container`}>
        <H2 colorType={TitleColorType.GOLD} type={TitleType.UNDERLINED}>
          Virtual tour
        </H2>
        <ul className={styles.tours__list}>
          {tours.slice(0, -1).map((tour) => (
            <li key={tour.name}>
              <Tour tour={tour} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tours;
