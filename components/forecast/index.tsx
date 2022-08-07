import styles from "./forecast.module.scss";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAmbulance, faAnchor, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
    forecast: Forecast[];
};

export const fontAwesomeIconForIconCode = (icon: number): IconDefinition => {
    switch (icon) {
        case 16:
            return faSearch;
        case 17:
            return faAmbulance;
        case 18:
            return faAnchor;
        default:
            return faAnchor;
    }
};

export const dayNameFromDateString = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-CA", { weekday: "short" });
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
                        <FontAwesomeIcon
                            icon={fontAwesomeIconForIconCode(today.icon)}
                            className={styles.forecastTodayIcon}
                        />
                        <div>
                            <p className={styles.forecastTodayDegrees}>{today.temp}°</p>
                            <p className={styles.forecastTodayText}>{today.text}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.forecastFuturePanels}>
                    {rest.map((dailyForecast, index) => (
                        <div key={`daily-${index}`} className={styles.forecastFutureTile}>
                            <p>{dayNameFromDateString(dailyForecast.date)}</p>
                            <FontAwesomeIcon
                                icon={fontAwesomeIconForIconCode(dailyForecast.icon)}
                                className={styles.forecastFutureIcon}
                            />
                            <p className={styles.forecastFutureDegrees}>{dailyForecast.temp}°</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
