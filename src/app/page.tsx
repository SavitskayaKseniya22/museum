'use client';

import React from 'react';
import styles from './page.module.scss';
import Contacts from './components/page/contacts/Contacts';
import Parallax from './components/page/parallax/Parallax';
import Footer from './components/page/footer/Footer';
import Tickets from './components/page/tickets/Tickets';

export default function Home() {
  return (
    <main className={styles.main}>
      <Tickets />
      <Parallax />
      <Contacts />
      <Footer />
    </main>
  );
}
