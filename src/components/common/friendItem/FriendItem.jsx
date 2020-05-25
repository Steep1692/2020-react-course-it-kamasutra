import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";
import defaultAvatar from '../../../assets/images/profileAvatar.png';
import Avatar from "../avatar/Avatar";

const FriendItem = ({friendItem}) => {
    const {
        id,
        name,
    } = friendItem;
    const path = `/profile/${id}`;

    return (
        <div
            className={s.friendItem}
        >
            <NavLink
                to={path}
            >
                <div className={s.wrapAvatar}>
                    <Avatar/>
                </div>
                <span>{name}</span>
            </NavLink>
        </div>
    );
};

export default FriendItem;
