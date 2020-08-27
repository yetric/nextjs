import React from "react";
import styles from "./styles/Container.module.scss";

export const Container = ({ children }) => <div className={styles.base}>{children}</div>;
