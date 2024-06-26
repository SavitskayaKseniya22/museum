import React, { ReactNode } from "react";
import styles from "./h5.module.scss";

function H5({ children }: { children: ReactNode }) {
  return <h5 className={styles.h5}>{children}</h5>;
}

export default H5;
