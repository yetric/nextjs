import React, { ReactNode } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./styles/Layout.module.css";

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
