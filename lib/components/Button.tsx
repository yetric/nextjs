import React from "react";
import styles from "./styles/Button.module.scss";

type ButtonType = "basic" | "alert" | "success" | "info" | "warning";
type ButtonSize = "normal" | "small" | "large" | "tiny";

interface ButtonProps {
    children: any;
    type?: ButtonType;
    size?: ButtonSize;
}

export const Button = ({ children, type = "basic", size = "normal" }: ButtonProps) => (
    <div className={`${styles[type]} ${styles[size]}`}>{children}</div>
);
