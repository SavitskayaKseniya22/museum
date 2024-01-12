/* eslint-disable jsx-a11y/media-has-caption */

'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './player.module.scss';

export function isVisible(elem: HTMLElement) {
  const coords = elem.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  const topVisible = coords.top > 0 && coords.top < windowHeight;
  const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function Player({ number }: { number: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const volumeRangeRef = useRef<HTMLInputElement | null>(null);

  const durationRangeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsPlaying(false);
    videoRef.current?.load();
  }, [number]);

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

  const toggleFullScreen = useCallback(() => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainerRef.current.requestFullscreen();
      }
    }
  }, []);

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
      const isVisibleValue = isVisible(
        videoContainerRef.current as HTMLElement
      );

      if (e.code === 'Space' && isVisibleValue) {
        e.preventDefault();
        togglePlayer();
      }

      if (e.code === 'KeyM' && (isVisibleValue || document.fullscreenElement)) {
        e.preventDefault();
        toggleSound();
      }

      if (
        e.code === 'KeyF' &&
        ((isVisibleValue && !document.fullscreenElement) ||
          document.fullscreenElement)
      ) {
        e.preventDefault();
        toggleFullScreen();
      }
    };

    const handleFullScreen = () => {
      if (document.fullscreenElement) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    const videoConstantRef = videoContainerRef.current;

    window.addEventListener('keydown', handleUserKeyPress);

    videoConstantRef!.addEventListener('fullscreenchange', handleFullScreen);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
      videoConstantRef!.removeEventListener(
        'fullscreenchange',
        handleFullScreen
      );
    };
  }, [toggleFullScreen, togglePlayer, toggleSound]);

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
          preload="metadata"
          poster={`/video/poster${number}.jpg`}
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
          onEnded={() => {
            setIsPlaying(false);
            videoRef.current?.load();
          }}
        >
          <source
            src={`video/video${number}.mp4` || 'video/video0.mp4'}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src={`video/video${number}.webm` || 'video/video0.webm'}
            type='video/webm; codecs="vp8, vorbis"'
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
          onClick={toggleFullScreen}
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
