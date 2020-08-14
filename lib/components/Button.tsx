import React from "react";
import styles from "./styles/Button.module.css";

interface ButtonProps {
    children: any;
}

export const Button = ({ children }: ButtonProps) => <div className={styles.base}>{children}</div>;
