import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./styles/Layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.basic}>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>{children}</div>
            </main>
            <Footer />
        </div>
    );
};
