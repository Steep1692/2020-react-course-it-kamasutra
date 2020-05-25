import React from 'react';
import s from './Avatar.module.css';
import defaultAvatar from '../../../assets/images/profileAvatar.png';

const Avatar = ({image = null}) => {
    return (
        <div className={s.wrapAvatar}>
            <img
                src={image || defaultAvatar}
                alt="Avatar"
            />
        </div>
    );
};

export default Avatar;
