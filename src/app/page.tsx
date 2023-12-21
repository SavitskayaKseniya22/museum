'use client';

import React from 'react';
import styles from './page.module.scss';

import Footer from './components/page/footer/footer';
import Contacts from './components/page/contacts/Contacts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Contacts />
      <Footer />
    </main>
  );
}
