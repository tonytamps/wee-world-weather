import styles from "./header.module.scss";
import React, { Component, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
    currentPath: string;
};

type City = {
    id: string;
    name: string;
    path: string;
};

const cities: City[] = [
    { id: "YOW", name: "Ottawa", path: "/ottawa" },
    { id: "MEL", name: "Melbourne", path: "/melbourne" },
    { id: "WLG", name: "Wellington", path: "/wellington" },
];

export class Header extends Component<Props> {
    renderCityLink = ({ id, name, path }: City): ReactNode => {
        const cityStyle = cx({
            [styles.city]: true,
            [styles.active]: path === this.props.currentPath,
        });

        return (
            <Link key={id} href={path}>
                <a className={cityStyle}>{name}</a>
            </Link>
        );
    };

    render() {
        return <header className={styles.header}>{cities.map(this.renderCityLink)}</header>;
    }
}
