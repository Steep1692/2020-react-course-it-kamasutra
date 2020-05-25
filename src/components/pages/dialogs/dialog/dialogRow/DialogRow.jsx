import React from 'react';
import s from './DialogRow.module.css';
import MessageItem from "../../../../common/messageItem/MessageItem";

const DialogRow = ({dialog}) => {
    const {
        messages,
        interlocutor,
    } = dialog;

    const dialogElements = messages.map((messageItem, key) => {
        const {
            author,
            message,
        } = messageItem;
        const isOwnMessage = (interlocutor !== author);

        return (
            <li key={key} className={(isOwnMessage) ? s.author : null}>
                <MessageItem
                    author={author}
                    message={message}
                />
            </li>
        );
    });

    return (
        <div className={s.dialogRow}>
            <ul>
                { dialogElements }
            </ul>
        </div>
    );
};

export default DialogRow;
