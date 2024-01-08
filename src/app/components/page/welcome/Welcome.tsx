/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import React, { useEffect, useState } from 'react';
import styles from './welcome.module.scss';
import WelcomeSlider from './components/welcome-slider/WelcomeSlider';
import WelcomeBurger from './components/welcome-burger/WelcomeBurger';
import WelcomeHeader from './components/welcome-header/WelcomeHeader';
import WelcomeGreetings from './components/welcome-greetings/WelcomeGreetings';
import BurgerContext from './components/context';

function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = (e: Event) => {
      const target = e.target as Window;
      if (target.outerWidth > 1919 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <section className={styles.welcome} id="Welcome">
      <div className={`${styles.container} container`}>
        <BurgerContext.Provider value={{ isOpen, setIsOpen }}>
          <WelcomeHeader />
        </BurgerContext.Provider>

        <div className={styles.welcome__content}>
          <WelcomeGreetings isOpen={isOpen} />
          <WelcomeSlider />
        </div>
        <WelcomeBurger isOpen={isOpen} />
      </div>
    </section>
  );
}

export default Welcome;
