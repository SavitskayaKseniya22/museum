"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./modal-container.module.scss";

function ModalContainer({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles["modal-container"]}>
      <button
        className={styles["modal-container__button_back"]}
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        <Image src="/svg/icon-cross.svg" alt="Cross" fill />
      </button>

      <div className={styles["modal-container__content"]}>{children}</div>
    </div>
  );
}
export default ModalContainer;
