import "../styles/globals.scss";
import "mobx-react-lite/batchingForReactDom";
import React from "react";

function YetricNext({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default YetricNext;
