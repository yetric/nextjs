import React from "react";
import styles from "./styles/Card.module.scss";

interface CardProps {}

export const Card = ({}: CardProps) => {
    return <div className={styles.outer}>Card</div>;
};
