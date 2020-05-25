import React from 'react';

import s from './Dialog.module.css';

import DialogRow from "./dialogRow/DialogRow";
import MessageForm from "../../../common/messageForm/MessageForm";

const Dialog = ({dialog, onMessageFormSubmit}) => {
    const {interlocutor} = dialog;

    return (
        <div className={s.wrapDialog}>
            <h3>Dialog with {interlocutor}</h3>
            <DialogRow
                dialog={dialog}
            />
            <MessageForm
                onSubmit={onMessageFormSubmit}
            />
        </div>
    );
};

export default Dialog;
