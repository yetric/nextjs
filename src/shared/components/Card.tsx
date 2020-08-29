import React from "react";
import styles from "./styles/Card.module.scss";

interface CardProps {
    children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return <div className={styles.outer}>{children}</div>;
};
