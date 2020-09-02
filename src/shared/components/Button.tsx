import React from "react";
import styles from "./styles/Button.module.scss";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { Icon } from "@components/Icon";

type ButtonType = "basic" | "alert" | "success" | "info" | "warning";
type ButtonSize = "normal" | "small" | "large" | "tiny";

interface ButtonProps {
    children: any;
    type?: ButtonType;
    size?: ButtonSize;
    icon?: IconName | null;
}

export const Button = ({ children, type = "basic", size = "normal", icon = null }: ButtonProps) => (
    <button className={`${styles[type]} ${styles[size]}`}>
        {icon && (
            <span className={styles.icon}>
                <Icon name={icon} />
            </span>
        )}
        {children}
    </button>
);
