import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wee World Weather</title>
                <meta name="description" content="Tiny little itty-bitty wee weather app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <ul>
                    <li>Ottawa</li>
                    <li>Melbourne</li>
                    <li>Wellington</li>
                </ul>
            </header>
            <main className={styles.main}>

            </main>
        </div>
    );
};

export default Home;
