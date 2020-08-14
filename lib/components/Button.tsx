import React from "react";
import styles from "./styles/Button.module.css";

type ButtonType = "basic" | "alert" | "success";

interface ButtonProps {
    children: any;
    type?: ButtonType;
}

export const Button = ({ children, type = "basic" }: ButtonProps) => (
    <div className={`${styles[type]}`}>{children}</div>
);
