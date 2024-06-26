/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */

import React, { ReactNode } from "react";
import styles from "./button.module.scss";

export enum ButtonType {
  MAIN = "main",
  SUB = "sub",
}

function Button({
  children,
  buttonType,
  className,
  globalType = "button",
  isDisabled = false,
}: {
  children: ReactNode;
  buttonType: ButtonType;
  className?: string;
  globalType?: "submit" | "button" | "reset" | undefined;
  isDisabled?: boolean;
}) {
  return (
    <button type={globalType} className={`${styles.button} ${styles[buttonType]} ${className}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
