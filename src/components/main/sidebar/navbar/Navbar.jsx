import React from 'react';
import s from './Navbar.module.css';
import NavLinkItem from "./navLink/NavLinkItem";

const Navbar = ({state}) => {
    const {
        links,
    } = state;

    const navElements =links.map((linkItem, key) => (
        <li
            className={s.listItem}
            key={key}
        >
            <NavLinkItem
                linkItem={linkItem}
            />
        </li>
    ));

    return (
        <nav className={s.nav}>
            <h3>Navigation</h3>
            <ul>
                { navElements }
            </ul>
        </nav>
    );
};

export default Navbar;
