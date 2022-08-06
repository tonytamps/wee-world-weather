import Head from "next/head";
import styles from "../styles/home.module.scss";
import { Header } from "../components/header";
import { Component } from "react";
import { NextPageContext } from "next";

type Props = {
    pathname: string;
};

class City extends Component<Props> {
    static async getInitialProps({ query }: NextPageContext) {
        return { pathname: `/${query.city}` };
    }

    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Wee World Weather</title>
                    <meta name="description" content="Tiny little itty-bitty wee weather app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header currentPath={this.props.pathname} />
                <main className={styles.main}></main>
            </div>
        );
    }
}

export default City;
