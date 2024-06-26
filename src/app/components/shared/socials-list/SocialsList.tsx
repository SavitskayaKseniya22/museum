/* eslint-disable react/require-default-props */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./socials-list.module.scss";

function SocialsList({ className }: { className?: string }) {
  return (
    <ul className={`${styles.socials__list} ${className}`}>
      <li>
        <Link href="https://www.youtube.com/user/louvre" target="_blank" className={styles.socials__link}>
          <Image src="/svg/icon-youtube.svg" width={20} height={17} alt="Youtube" />
        </Link>
      </li>

      <li>
        <Link href="https://www.instagram.com/museelouvre/" target="_blank" className={styles.socials__link}>
          <Image src="/svg/icon-instagram.svg" width={20} height={17} alt="Instagram" />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/museedulouvre" target="_blank" className={styles.socials__link}>
          <Image src="/svg/icon-facebook.svg" width={20} height={17} alt="Facebook" />
        </Link>
      </li>
      <li>
        <Link href="http://twitter.com/museelouvre" target="_blank" className={styles.socials__link}>
          <Image src="/svg/icon-twitter.svg" width={20} height={17} alt="Twitter" />
        </Link>
      </li>
      <li>
        <Link href="https://www.pinterest.fr/museedulouvre/" target="_blank" className={styles.socials__link}>
          <Image src="/svg/icon-pinterest.svg" width={20} height={17} alt="Pinterest" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialsList;
