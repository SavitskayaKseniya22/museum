import React from "react";
import Image from "next/image";
import { Forum } from "next/font/google";
import styles from "./logo.module.scss";

const forum = Forum({ weight: "400", subsets: ["latin"], style: "normal" });

function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/svg/icon-logo.svg" width={49} height={26} alt="Logo triangle" className={styles.logo__image} />
      <h1 className={`${styles.logo__title} ${forum.className}`}>Louvre</h1>
    </div>
  );
}

export default Logo;
