import React from 'react';
import s from './NavLinkItem.module.css';
import {NavLink} from "react-router-dom";

const NavLinkItem = ({linkItem}) => {
    const {
        to,
        name,
    } = linkItem;

    return (
        <NavLink
            to={to}
            className={s.navLinkItem}
            activeClassName={s.active}
        >{name}</NavLink>
    );
};

export default NavLinkItem;
