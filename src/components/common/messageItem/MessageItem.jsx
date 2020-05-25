import React from 'react';
import s from './MessageItem.module.css';
import Avatar from "../avatar/Avatar";

const MessageItem = ({author, message, onClick}) => {
    return (
        <div
            className={s.messageItem}
            onClick={onClick}
        >
            <div className={s.wrapAvatar}>
                <a href="#!">
                    <Avatar/>
                </a>
            </div>
            <div className={s.content}>
                <div className={s.text}>
                    <a href="#!">
                        <div className={s.name}>
                            {author}
                        </div>
                    </a>
                    <div className={s.text}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageItem;
