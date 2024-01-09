/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './journey-slider.module.scss';
import Player from '../player/Player';

enum AnimationType {
  'LEFT',
  'RIGHT',
}

const widthSliderItem = [454, 300, 354, 180];
const gaps = [40, 40, 20, 20];

function JourneySlider({ content }: { content: Array<number> }) {
  const [slide, setSlide] = useState(4);

  const [onTransition, setOnTransition] = useState<AnimationType | null>(null);

  const [widthRange, setWidthRange] = useState<null | 0 | 1 | 2 | 3>(null);

  const transitionTime = useRef(0.25);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width } = window;
      if (width >= 1920) {
        setWidthRange(0);
      } else if (width < 1920 && width >= 1024) {
        setWidthRange(1);
      } else if (width < 1024 && width >= 768) {
        setWidthRange(2);
      } else if (width < 768) {
        setWidthRange(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (onTransition !== null) {
      timeout = setTimeout(() => {
        const ref = onTransition;
        setOnTransition(null);

        if (ref === AnimationType.LEFT) {
          setSlide((a) => (a < content.length - 1 ? a + 1 : 0));
        } else {
          setSlide((a) => (a > 0 ? a - 1 : content.length - 1));
        }
      }, transitionTime.current * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [content.length, onTransition]);

  return (
    <div className={styles.slider}>
      <Player src={content[slide] as unknown as string} />

      <div className={styles.slider__content}>
        {widthRange !== null && (
          <ul
            style={{
              left: `-${(() => {
                if (slide >= 0) {
                  if (slide === content.length - 1 && widthRange < 2) {
                    return (
                      widthSliderItem[widthRange] * (slide - 2) +
                      gaps[widthRange] * (slide - 2) -
                      1
                    );
                  }

                  if (
                    (slide === content.length - 2 && widthRange < 2) ||
                    (slide === content.length - 1 && widthRange >= 2)
                  ) {
                    return (
                      widthSliderItem[widthRange] * (slide - 1) +
                      gaps[widthRange] * (slide - 1) -
                      1
                    );
                  }

                  if (
                    slide <= content.length - 3 ||
                    (slide === content.length - 2 && widthRange >= 2)
                  ) {
                    return (
                      widthSliderItem[widthRange] * slide +
                      gaps[widthRange] * slide -
                      1
                    );
                  }

                  return 0;
                }

                return 0;
              })()}px`,
              gap: gaps[widthRange],
              transform: `translateX(${(() => {
                if (onTransition === AnimationType.LEFT) {
                  return `${-widthSliderItem[widthRange] - gaps[widthRange]}`;
                }
                if (onTransition === AnimationType.RIGHT) {
                  return `${widthSliderItem[widthRange] + gaps[widthRange]}`;
                }
                return 0;
              })()})px`,
              transition: `${transitionTime.current}s`,
            }}
          >
            {content.map((item, i) => (
              <li
                onClick={() => {
                  setSlide(i);
                }}
                className={styles.slider__item}
                style={{ width: widthSliderItem[widthRange] }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.slider__controls}>
        <button
          type="button"
          onClick={() => {
            if (slide > 0) {
              setOnTransition(AnimationType.RIGHT);
            }
          }}
          disabled={!!onTransition || slide === 0}
        >
          <Image src="/svg/icon-arrow_left.svg" fill alt="Arrow to the left" />
        </button>

        <button
          type="button"
          onClick={() => {
            if (
              (slide < content.length - 2 &&
                widthRange !== null &&
                widthRange >= 2) ||
              (slide < content.length - 3 &&
                widthRange !== null &&
                widthRange < 2)
            ) {
              setOnTransition(AnimationType.LEFT);
            }
          }}
          disabled={
            !!onTransition ||
            (slide >= content.length - 2 &&
              widthRange !== null &&
              widthRange >= 2) ||
            (slide >= content.length - 3 &&
              widthRange !== null &&
              widthRange < 2)
          }
        >
          <Image
            src="/svg/icon-arrow_right.svg"
            fill
            alt="Arrow to the right"
          />
        </button>
      </div>
    </div>
  );
}

export default JourneySlider;