import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "normalize.css/normalize.css";
import "../styles/globals.scss";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Wee World Weather</title>
                <meta name="description" content="Tiny little itty-bitty wee weather app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
