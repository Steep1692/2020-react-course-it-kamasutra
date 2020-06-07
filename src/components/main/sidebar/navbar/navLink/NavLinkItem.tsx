import React, {FC} from 'react'
import s from './NavLinkItem.module.css'
import {NavLink} from 'react-router-dom'
import {LinkType} from "../../../../../models/navbar";

type Props = {
    linkItem: LinkType
}

const NavLinkItem: FC<Props> = ({linkItem}) => {
    const {
        to,
        name,
    } = linkItem

    return (
        <NavLink
            to={to}
            className={s.navLinkItem}
            activeClassName={s.active}
        >{name}</NavLink>
    )
}

export default NavLinkItem
