import "../styles/globals.css";
import React from "react"; // Always do explicit imports

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
