import "../styles/globals.scss";
import "mobx-react-lite/batchingForReactDom";
import React from "react";
import { Layout } from "@components/Layout"; // Always do explicit imports

function YetricNext({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default YetricNext;
