import React from "react";
import styles from "./styles/Spinner.module.scss";

interface SpinnerProps {}

export const Spinner = ({}: SpinnerProps) => {
    return <div className={styles.spinner} />;
};
