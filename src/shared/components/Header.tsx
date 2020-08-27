import React from "react";
import styles from "./styles/Header.module.scss";
import Link from "next/link";

export const Header = () => (
    <div className={styles.outer}>
        <div className={styles.inner}>
            <Link href={"/"}>
                <a className={styles.brand}>Home</a>
            </Link>
        </div>
    </div>
);
