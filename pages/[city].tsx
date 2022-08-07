import React, { Component } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "../components/header";
import { ForecastComponent } from "../components/forecast";

import styles from "../styles/home.module.scss";

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
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=3600");

    // const forecastRes = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/55487?apikey=${process.env.ACCUWEATHER_API_KEY}&language=en-CA&metric=true`);
    // const accuweatherForecast = await forecastRes.json();
    const accuweatherForecast = {
        Headline: {
            EffectiveDate: "2022-08-07T14:00:00-04:00",
            EffectiveEpochDate: 1659895200,
            Severity: 3,
            Text: "Thunderstorms in the area this afternoon through this evening",
            Category: "thunderstorm",
            EndDate: "2022-08-08T02:00:00-04:00",
            EndEpochDate: 1659938400,
            MobileLink:
                "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?unit=c&lang=en-us",
        },
        DailyForecasts: [
            {
                Date: "2022-08-07T07:00:00-04:00",
                EpochDate: 1659870000,
                Temperature: {
                    Minimum: {
                        Value: 19.3,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 32,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 16,
                    IconPhrase: "Mostly cloudy w/ t-storms",
                    HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Heavy",
                },
                Night: {
                    Icon: 15,
                    IconPhrase: "Thunderstorms",
                    HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Heavy",
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=1&unit=c&lang=en-us",
                Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=1&unit=c&lang=en-us",
            },
            {
                Date: "2022-08-08T07:00:00-04:00",
                EpochDate: 1659956400,
                Temperature: {
                    Minimum: {
                        Value: 15.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 21.8,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 15,
                    IconPhrase: "Thunderstorms",
                    HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Heavy",
                },
                Night: {
                    Icon: 12,
                    IconPhrase: "Showers",
                    HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light",
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=2&unit=c&lang=en-us",
                Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=2&unit=c&lang=en-us",
            },
            {
                Date: "2022-08-09T07:00:00-04:00",
                EpochDate: 1660042800,
                Temperature: {
                    Minimum: {
                        Value: 14.5,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 23.8,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 6,
                    IconPhrase: "Mostly cloudy",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 35,
                    IconPhrase: "Partly cloudy",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=3&unit=c&lang=en-us",
                Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=3&unit=c&lang=en-us",
            },
            {
                Date: "2022-08-10T07:00:00-04:00",
                EpochDate: 1660129200,
                Temperature: {
                    Minimum: {
                        Value: 15.9,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 25.3,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 3,
                    IconPhrase: "Partly sunny",
                    HasPrecipitation: false,
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Clear",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=4&unit=c&lang=en-us",
                Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=4&unit=c&lang=en-us",
            },
            {
                Date: "2022-08-11T07:00:00-04:00",
                EpochDate: 1660215600,
                Temperature: {
                    Minimum: {
                        Value: 13.3,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 24.7,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                Day: {
                    Icon: 2,
                    IconPhrase: "Mostly sunny",
                    HasPrecipitation: true,
                    PrecipitationType: "Rain",
                    PrecipitationIntensity: "Light",
                },
                Night: {
                    Icon: 33,
                    IconPhrase: "Clear",
                    HasPrecipitation: false,
                },
                Sources: ["AccuWeather"],
                MobileLink:
                    "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=5&unit=c&lang=en-us",
                Link: "http://www.accuweather.com/en/ca/ottawa/k1p/daily-weather-forecast/55487?day=5&unit=c&lang=en-us",
            },
        ],
    };

    const weeWorldWeatherForecast = accuweatherForecast.DailyForecasts.map(
        ({ Date, Temperature, Day }) => ({
            date: Date,
            temp: Temperature.Maximum.Value,
            icon: Day.Icon,
            text: Day.IconPhrase,
        })
    );

    return {
        props: {
            pathname: `/${query.city}`,
            forecast: weeWorldWeatherForecast,
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
