import React from 'react';
import s from './PostItem.module.css';
import defaultAvatar from '../../../assets/images/profileAvatar.png';
import Avatar from "../avatar/Avatar";

const PostItem = ({name, message, likesCount}) => {

    return (
        <div className={s.post}>
            <div className={s.wrapAvatar}>
                <Avatar/>
            </div>
            <div className={s.content}>
                <div className={s.text}>
                    <div className={s.name}>
                        {name}
                    </div>
                    <div className={s.text}>
                        {message}
                    </div>
                </div>
                <div className={s.actions}>
                    <span>{ likesCount }</span>
                    <button>Like</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
