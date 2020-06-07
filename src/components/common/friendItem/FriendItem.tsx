import React, {FC} from 'react'
import s from './FriendItem.module.css'
import {NavLink} from "react-router-dom"
import Avatar from "../avatar/Avatar"
import {FriendType} from "../../../models/friends";

type Props = {
    friendItem: FriendType
}

const FriendItem: FC<Props> = ({friendItem}) => {
    const {
        id,
        name,
        photos,
    } = friendItem
    const path = `/profile/${id}`
    const avatar = photos.small || photos.large

    return (
        <div
            className={s.friendItem}
        >
            <NavLink
                to={path}
            >
                <div className={s.wrapAvatar}>
                    <Avatar image={avatar}/>
                </div>
                <span>{name}</span>
            </NavLink>
        </div>
    )
}

export default FriendItem
