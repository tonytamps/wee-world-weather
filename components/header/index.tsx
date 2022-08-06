import styles from "./header.module.scss";
import React, { Component, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
    currentPath: string;
    cities: City[];
};

export class Header extends Component<Props> {
    renderCityLink = ({ id, name, path }: City): ReactNode => {
        const { currentPath } = this.props;
        const cityStyle = cx({
            [styles.city]: true,
            [styles.active]: path === currentPath,
        });

        return (
            <Link key={id} href={path}>
                <a className={cityStyle}>{name}</a>
            </Link>
        );
    };

    render() {
        const { cities } = this.props;
        return <header className={styles.header}>{cities.map(this.renderCityLink)}</header>;
    }
}
