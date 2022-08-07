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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
