import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './comparison.module.scss';

function Comparition() {
  const [position, setPosition] = useState(50);

  const cursorRef = useRef(null);

  const dropZoneRef = useRef(null);

  const positions = useRef({ left: 0, right: 0, width: 0 });

  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const dropzonePosition = (
        dropZoneRef.current as unknown as HTMLElement
      ).getBoundingClientRect();

      positions.current = {
        left: dropzonePosition.left,
        right: dropzonePosition.right,
        width: dropzonePosition.width,
      };
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={dropZoneRef}
      className={styles.comparition}
      onDragOver={(e) => {
        e.preventDefault();
        const x = e.pageX;
        const { left, right, width } = positions.current;

        if (x > left && x < right) {
          setPosition(((x - left - 20) / width) * 100);
        }
      }}
    >
      <div
        className={styles.comparition__image_first}
        style={{ width: `calc(${position}% + 20px)` }}
      >
        <Image
          src="/img/explore/img-before.jpg"
          fill
          alt="Before"
          style={{ objectFit: 'cover', objectPosition: 'left bottom' }}
        />
      </div>
      <div
        draggable
        className={styles.comparition__slider}
        style={{
          left: `${position}%`,
        }}
        ref={cursorRef}
        onDragStart={(e) => {
          e.dataTransfer.setDragImage(
            imageRef.current as unknown as Element,
            -1000,
            -1000
          );
        }}
      >
        <Image
          src="/img/explore/img-cursor.png"
          fill
          alt="Before"
          draggable="false"
          ref={imageRef}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className={styles.comparition__image_second}>
        <Image
          src="/img/explore/img-after.jpg"
          fill
          alt="After"
          style={{ objectFit: 'cover', objectPosition: 'right bottom' }}
        />
      </div>
    </div>
  );
}

export default Comparition;
