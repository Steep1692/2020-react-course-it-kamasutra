import React from 'react';
import s from './FriendsBlock.module.css';
import FriendItem from "../../../common/friendItem/FriendItem";

const FriendsBlock = ({state}) => {
    const {
        friends,
    } = state;

    const friendsElements = friends.map((friendItem, key) => (
        <li key={key}>
            <FriendItem
                friendItem={friendItem}
            />
        </li>
    ));

    return (
        <div className={s.friendsBlock}>
            <h3>Friends</h3>
            <ul>
                { friendsElements }
            </ul>
        </div>

    );
};

export default FriendsBlock;
