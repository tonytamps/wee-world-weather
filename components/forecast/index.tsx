import styles from "./forecast.module.scss";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    IconDefinition,
    faSun,
    faCloudSun,
    faSmog,
    faCloud,
    faCloudRain,
    faCloudSunRain,
    faCloudBolt,
    faWind,
    faSnowflake,
    faIcicles,
    faTemperatureArrowUp,
    faTemperatureArrowDown,
    faCloudMoon,
    faMoon,
    faCloudMoonRain,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
    forecast: Forecast[];
};

export const fontAwesomeIconForIconCode = (icon: number): IconDefinition => {
    switch (icon) {
        case 1:
            return faSun;
        case 2:
            return faCloudSun;
        case 3:
            return faCloudSun;
        case 4:
            return faCloudSun;
        case 5:
            return faCloudSun;
        case 6:
            return faCloud;
        case 7:
            return faCloud;
        case 8:
            return faCloud;
        case 11:
            return faSmog;
        case 12:
            return faCloudRain;
        case 13:
            return faCloudRain;
        case 14:
            return faCloudSunRain;
        case 15:
            return faCloudBolt;
        case 16:
            return faCloudBolt;
        case 17:
            return faCloudSunRain;
        case 18:
            return faCloudRain;
        case 19:
            return faWind;
        case 20:
            return faWind;
        case 21:
            return faWind;
        case 22:
            return faSnowflake;
        case 23:
            return faSnowflake;
        case 24:
            return faIcicles;
        case 25:
            return faIcicles;
        case 26:
            return faIcicles;
        case 29:
            return faSnowflake;
        case 30:
            return faTemperatureArrowUp;
        case 31:
            return faTemperatureArrowDown;
        case 32:
            return faWind;
        case 33:
            return faMoon;
        case 34:
            return faCloudMoon;
        case 35:
            return faCloudMoon;
        case 36:
            return faCloudMoon;
        case 37:
            return faCloudMoon;
        case 38:
            return faCloud;
        case 39:
            return faCloudMoonRain;
        case 40:
            return faCloudMoonRain;
        case 41:
            return faCloudBolt;
        case 42:
            return faCloudBolt;
        case 43:
            return faWind;
        case 44:
            return faSnowflake;
        default:
            return faQuestion;
    }
};

export class ForecastComponent extends Component<Props> {
    render() {
        const { forecast } = this.props;
        const [today, ...rest] = forecast;
        return (
            <div className={styles.forecastPanel}>
                <div className={styles.forecastTodayPanel}>
                    <p>Today</p>
                    <div className={styles.forecastTodayDetail}>
                        <div className={styles.forecastTodayDetailLeft}>
                            <FontAwesomeIcon
                                icon={fontAwesomeIconForIconCode(today.icon)}
                                className={styles.forecastTodayIcon}
                            />
                        </div>
                        <div className={styles.forecastTodayDetailRight}>
                            <p className={styles.forecastTodayDegrees}>{Math.round(today.temp)}°</p>
                            <p className={styles.forecastTodayText}>{today.text}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.forecastFuturePanels}>
                    {rest.map((dailyForecast, index) => (
                        <div key={`daily-${index}`} className={styles.forecastFutureTile}>
                            <p>{dailyForecast.day}</p>
                            <FontAwesomeIcon
                                icon={fontAwesomeIconForIconCode(dailyForecast.icon)}
                                className={styles.forecastFutureIcon}
                            />
                            <p className={styles.forecastFutureDegrees}>
                                {Math.round(dailyForecast.temp)}°
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
