import React from "react";
import Head from "next/head";

export const withTitle = (Component: React.ComponentType, title: string) => {
    return (props) => {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <Component />
            </>
        );
    };
};
