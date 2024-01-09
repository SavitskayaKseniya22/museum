'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './player.module.scss';

function Player({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const volumeRangeRef = useRef<HTMLInputElement | null>(null);

  const durationRangeRef = useRef<HTMLInputElement | null>(null);

  const togglePlayer = useCallback(() => {
    setIsPlaying((a) => !a);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPlaying]);

  const toggleFullsCreen = useCallback(() => {
    if (videoContainerRef.current) {
      if (isFullScreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        videoContainerRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    }
  }, [isFullScreen]);

  const toggleSound = useCallback(() => {
    setIsMuted((a) => !a);

    if (videoRef.current && volumeRangeRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        volumeRangeRef.current.value = videoRef.current
          .volume as unknown as string;
      } else {
        videoRef.current.muted = true;
        volumeRangeRef.current.value = '0';
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const handleUserKeyPress = (e: KeyboardEvent) => {
      console.log(e.code);
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayer();
      }
      if (e.code === 'KeyM') {
        e.preventDefault();
        toggleSound();
      }

      if (e.code === 'KeyF') {
        e.preventDefault();
        toggleFullsCreen();
      }
      /*
      if (e.code === 'Escape' && isFullScreen) {
        e.preventDefault();
        toggleFullsCreen();
      } */
    };

    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [isFullScreen, toggleFullsCreen, togglePlayer, toggleSound]);

  useEffect(() => {
    if (durationRangeRef.current && videoRef.current) {
      durationRangeRef.current.max = videoRef.current
        .duration as unknown as string;
      durationRangeRef.current.value = '0';
    }
  }, []);

  return (
    <div ref={videoContainerRef} className={styles.player}>
      <div className={styles.player__content} ref={videoContainerRef}>
        <button
          className={styles.player__control}
          type="button"
          onClick={togglePlayer}
        >
          <Image
            src="/svg/icon-play_big.svg"
            fill
            alt="Play"
            style={{ display: isPlaying ? 'none' : 'block' }}
          />
        </button>

        <video
          poster="/img/img-poster.jpg"
          className={styles.player__video}
          ref={videoRef}
          onDurationChange={(e) => {
            if (durationRangeRef.current) {
              durationRangeRef.current.max = (e.target as HTMLVideoElement)
                .duration as unknown as string;
              durationRangeRef.current.value = '0';
            }
          }}
          onTimeUpdate={(e) => {
            if (durationRangeRef.current) {
              durationRangeRef.current.value = (e.target as HTMLVideoElement)
                .currentTime as unknown as string;
            }
          }}
        >
          <track default kind="captions" src={src || 'video/video0.mp4'} />
          <source
            src={src || 'video/video0.mp4'}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </div>

      <div className={styles.player__controls}>
        <button
          className={styles.player__controls_play}
          type="button"
          onClick={togglePlayer}
        >
          <Image
            src="/svg/icon-play.svg"
            width={23}
            height={30}
            alt="Play"
            style={{ display: isPlaying ? 'none' : 'block' }}
          />
          <Image
            src="/svg/icon-pause.svg"
            width={25}
            height={25}
            alt="Play"
            style={{ display: isPlaying ? 'block' : 'none' }}
          />
        </button>
        <input
          type="range"
          className={styles.player__controls_duration}
          name="remote"
          ref={durationRangeRef}
          onChange={(e) => {
            if (videoRef.current) {
              videoRef.current.currentTime = +e.target.value;
            }
          }}
          defaultValue={0}
        />
        <button
          className={styles.player__controls_volume}
          type="button"
          onClick={toggleSound}
        >
          <Image
            src="/svg/icon-volume.svg"
            width={38}
            height={30}
            alt="Volume"
            style={{ display: isMuted ? 'none' : 'block' }}
          />

          <Image
            src="/svg/icon-mute.svg"
            width={38}
            height={30}
            alt="Volume"
            style={{ display: isMuted ? 'block' : 'none' }}
          />
        </button>
        <input
          type="range"
          className={styles['player__controls_volume-range']}
          name="volume"
          ref={volumeRangeRef}
          onChange={(e) => {
            if (videoRef.current) {
              videoRef.current.volume = +e.target.value;
            }
          }}
          min={0}
          max={1}
          step={0.1}
          defaultValue={1}
        />
        <button
          className={styles.player__controls_full}
          type="button"
          onClick={toggleFullsCreen}
        >
          <Image
            src="/svg/icon-braces.svg"
            width={35}
            height={35}
            alt="Braces"
            style={{ display: isFullScreen ? 'none' : 'block' }}
          />
          <Image
            src="/svg/icon-braces_exit.svg"
            width={35}
            height={35}
            alt="Braces"
            style={{ display: isFullScreen ? 'block' : 'none' }}
          />
        </button>
      </div>
    </div>
  );
}

export default Player;
