import React from "react";
import styles from "./page.module.scss";
import Contacts from "./components/page/contacts/Contacts";
import Parallax from "./components/page/parallax/Parallax";
import Footer from "./components/page/footer/Footer";
import Tickets from "./components/page/tickets/Tickets";
import Tours from "./components/page/tours/Tours";
import Explore from "./components/page/explore/Explore";
import Journey from "./components/page/journey/Journey";
import Welcome from "./components/page/welcome/Welcome";
import Gallery from "./components/page/gallery/Gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Tours />
      <Explore />
      <Journey />
      <Gallery />
      <Tickets />
      <Parallax />
      <Contacts />
      <Footer />
    </main>
  );
}
