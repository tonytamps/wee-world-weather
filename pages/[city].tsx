import React, { Component } from "react";
import { GetServerSideProps } from "next";

import { Header } from "../components/header";
import { ForecastComponent } from "../components/forecast";

import { getForecast } from "../lib/weather";

import styles from "../styles/city.module.scss";

type Props = {
    pathname: string;
    forecast: Forecast[];
};

const cities: City[] = [
    { id: "YOW", name: "Ottawa", path: "/ottawa", locationKey: "55487" },
    { id: "MEL", name: "Melbourne", path: "/melbourne", locationKey: "26216" },
    { id: "WLG", name: "Wellington", path: "/wellington", locationKey: "250938" },
];

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
    const pathname = `/${query.city}`;
    const currentCity = cities.find((city) => city.path === pathname);

    if (!currentCity) {
        return {
            notFound: true,
        };
    }

    const forecast = await getForecast(currentCity.locationKey);

    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=3600");

    return {
        props: {
            pathname,
            forecast,
        },
    };
};

class CityPage extends Component<Props> {
    render() {
        const validCity = cities.some((city) => city.path === this.props.pathname);

        return (
            <div className={styles.container}>
                <Header currentPath={this.props.pathname} cities={cities} />
                <main className={styles.main}>
                    {validCity ? (
                        <ForecastComponent forecast={this.props.forecast} />
                    ) : (
                        <p className={styles.invalidCity}>
                            The selected city is invalid, please select one from the menu above
                        </p>
                    )}
                </main>
            </div>
        );
    }
}

export default CityPage;
