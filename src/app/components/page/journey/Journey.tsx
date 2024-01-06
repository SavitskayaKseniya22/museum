/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React from 'react';

import styles from './journey.module.scss';

import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import Player from './components/player/Player';

function Journey() {
  return (
    <section className="video light-theme" id="Video">
      <div className="container">
        <div className="content">
          <H2 type={TitleType.REGULAR} colorType={TitleColorType.GOLD}>
            Video journey
          </H2>
          <p>
            Enter and visit one of the most famous museums in the world and
            enjoy masterpieces such as Mona Lisa or Hammurabi&apos;s Code
          </p>
        </div>

        <Player />

        <div
          id="video-slider"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner playlist">
            <div className="carousel-item active">
              <iframe
                width="452"
                height="254"
                src="https://www.youtube.com/embed/zp1BXPX8jcU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <iframe
                width="452"
                height="254"
                src="https://www.youtube.com/embed/aWmJ5DgyWPI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <iframe
                width="452"
                height="254"
                src="https://www.youtube.com/embed/Vi5D6FKhRmo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <iframe
                width="452"
                height="254"
                src="https://www.youtube.com/embed/NOhDysLnTvY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <iframe
                width="452"
                height="254"
                src="https://www.youtube.com/embed/2OR0OCr6uRE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-block w-100"
              />
            </div>
          </div>

          <div className="video-slider-control">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#video-slider"
              data-bs-slide="prev"
            />

            <div className="paginator carousel-indicators">
              <button
                type="button"
                data-bs-target="#video-slider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#video-slider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#video-slider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#video-slider"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#video-slider"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              />
            </div>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#video-slider"
              data-bs-slide="next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
