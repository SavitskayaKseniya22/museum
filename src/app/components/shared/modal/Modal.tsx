"use client";

import React, { ReactNode, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./modal.module.scss";

function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const closePopup = useCallback(() => {
    router.back();
    document.body.style.overflow = "unset";
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains(`${styles.modal}`)) {
        closePopup();
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePopup();
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [closePopup]);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button
          onClick={() => {
            closePopup();
          }}
          type="button"
          className={styles.modal__button_back}
        >
          <Image src="/svg/icon-cross.svg" alt="Cross" fill />
        </button>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
