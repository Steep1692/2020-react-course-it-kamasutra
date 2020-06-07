import React, {FC} from 'react'
import s from './FriendsBlock.module.css'
import FriendItem from '../../../common/friendItem/FriendItem'
import {FriendType} from "../../../../models/friends";
import {FriendsBlockType} from "../../../../models/navbar";

type Props = {
    friendsBlock: FriendsBlockType
}

const FriendsBlock: FC<Props> = ({friendsBlock}) => {
    const {
        friends,
    } = friendsBlock

    const friendsElements = friends.map((friendItem: FriendType, key: number) => (
        <li key={key}>
            <FriendItem
                friendItem={friendItem}
            />
        </li>
    ))

    return (
        <div className={s.friendsBlock}>
            <h3>Friends</h3>
            <ul>
                { friendsElements }
            </ul>
        </div>

    )
}

export default FriendsBlock
