import Head from "next/head";
import styles from "../styles/home.module.scss";
import { Header } from "../components/header";
import React, { Component } from "react";
import { NextPageContext } from "next";

type Props = {
    pathname: string;
};

const cities: City[] = [
    { id: "YOW", name: "Ottawa", path: "/ottawa" },
    { id: "MEL", name: "Melbourne", path: "/melbourne" },
    { id: "WLG", name: "Wellington", path: "/wellington" },
];

class CityPage extends Component<Props> {
    static async getInitialProps({ query }: NextPageContext) {
        return { pathname: `/${query.city}` };
    }

    render() {
        const validCity = cities.some((city) => city.path === this.props.pathname);

        return (
            <div className={styles.container}>
                <Head>
                    <title>Wee World Weather</title>
                    <meta name="description" content="Tiny little itty-bitty wee weather app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header currentPath={this.props.pathname} cities={cities} />
                <main className={styles.main}>{validCity ? "valid" : "missing"}</main>
            </div>
        );
    }
}

export default CityPage;
