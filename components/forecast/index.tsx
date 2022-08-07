import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { iconForIconCode } from "../../lib/weather";

import styles from "./forecast.module.scss";

type Props = {
    forecast: Forecast[];
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
                                icon={iconForIconCode(today.icon)}
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
                                icon={iconForIconCode(dailyForecast.icon)}
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
