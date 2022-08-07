import styles from "./forecast.module.scss";
import React, { Component, ReactNode } from "react";
// import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAmbulance, faAnchor } from "@fortawesome/free-solid-svg-icons";

// const cx = classNames.bind(styles);

type Props = {};

export class Forecast extends Component<Props> {
    // renderCityLink = ({ id, name, path }: City): ReactNode => {
    //     const { currentPath } = this.props;
    //     const cityStyle = cx({
    //         [styles.city]: true,
    //         [styles.active]: path === currentPath,
    //     });
    //
    //     return (
    //         <Link key={id} href={path}>
    //             <a className={cityStyle}>{name}</a>
    //         </Link>
    //     );
    // };

    render() {
        return (
            <div className={styles.forecastPanel}>
                <div className={styles.forecastTodayPanel}>
                    <p>Today</p>
                    <div className={styles.forecastTodayDetail}>
                        <FontAwesomeIcon icon={faSearch} className={styles.forecastTodayIcon} />
                        <div>
                            <p className={styles.forecastTodayDegrees}>19°</p>
                            <p className={styles.forecastTodayText}>Clouds</p>
                        </div>
                    </div>
                </div>
                <div className={styles.forecastFuturePanels}>
                    <div className={styles.forecastFutureTile}>
                        <p>Wed</p>
                        <FontAwesomeIcon icon={faSearch} className={styles.forecastFutureIcon} />
                        <p className={styles.forecastFutureDegrees}>19°</p>
                    </div>
                    <div className={styles.forecastFutureTile}>
                        <p>Thu</p>
                        <FontAwesomeIcon icon={faSearch} className={styles.forecastFutureIcon} />
                        <p className={styles.forecastFutureDegrees}>19°</p>
                    </div>
                    <div className={styles.forecastFutureTile}>
                        <p>Fri</p>
                        <FontAwesomeIcon icon={faSearch} className={styles.forecastFutureIcon} />
                        <p className={styles.forecastFutureDegrees}>19°</p>
                    </div>
                    <div className={styles.forecastFutureTile}>
                        <p>Sat</p>
                        <FontAwesomeIcon icon={faSearch} className={styles.forecastFutureIcon} />
                        <p className={styles.forecastFutureDegrees}>19°</p>
                    </div>
                </div>
            </div>
        );
    }
}
