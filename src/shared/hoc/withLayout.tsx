import React from "react";
import { Layout } from "@components/Layout";

export const withLayout = (Component: React.ComponentType) => {
    return (props) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
