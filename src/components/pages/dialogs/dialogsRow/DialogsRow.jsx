import React from 'react';
import s from './DialogsRow.module.css';
import MessageItem from "../../../common/messageItem/MessageItem";

const DialogsRow = ({dialogs}) => {
    const dialogsElements = dialogs.map(({name, message, id}) => (
        <li key={id}>
            <MessageItem
                author={name}
                message={message}
                onClick={() => {
                    console.log(id)
                }}
            />
        </li>
    ));

    return (
        <div className={s.wrapDialogsRow}>
            <h3>Dialogs</h3>
            <ul>
                { dialogsElements }
            </ul>
        </div>
    );
};

export default DialogsRow;
