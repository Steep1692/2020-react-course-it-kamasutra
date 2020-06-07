import React, {FC} from 'react'
import s from './Dialog.module.css'
import DialogRow from './dialogRow/DialogRow'
import MessageForm from '../../../common/messageForm/MessageForm'
import {DialogType} from "../../../../models/dialogs";

type Props = {
    dialog: DialogType
    onMessageFormSubmit: ({messageText}: any) => void
}

const Dialog: FC<Props> = ({dialog, onMessageFormSubmit}) => {
    const {interlocutor} = dialog

    return (
        <div className={s.wrapDialog}>
            <h3>Dialog with {interlocutor}</h3>
            <DialogRow
                dialog={dialog}
            />
            <MessageForm
                captchaUrl={null}
                onSubmit={onMessageFormSubmit}
            />
        </div>
    )
}

export default Dialog
