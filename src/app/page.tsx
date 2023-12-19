'use client';

import React from 'react';
import styles from './page.module.scss';
import H2 from './components/shared/h2/H2';
import Footer from './components/page/footer/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <H2>CONTACTS</H2>
      <p>museum</p>
      <Footer />
    </main>
  );
}
