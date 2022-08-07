import React, { Component } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "../components/header";
import { ForecastComponent } from "../components/forecast";

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

export const dayNameFromDateString = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-CA", { weekday: "short" });
};

export const getForecast = async (locationKey: string) => {
    const forecastRes = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.ACCUWEATHER_API_KEY}&language=en-CA&metric=true`
    );

    if (!forecastRes.ok) {
        throw new Error("Error fetching forecast");
    }

    const accuweatherForecast: AccuweatherForecast = await forecastRes.json();

    return accuweatherForecast.DailyForecasts.map(({ Date, Temperature, Day }) => ({
        date: Date,
        day: dayNameFromDateString(Date),
        temp: Temperature.Maximum.Value,
        icon: Day.Icon,
        text: Day.IconPhrase,
    }));
};

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
                <Head>
                    <title>Wee World Weather</title>
                    <meta name="description" content="Tiny little itty-bitty wee weather app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
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
