import React, {FC} from 'react'
import s from './DialogsRow.module.css'
import MessageItem from '../../../common/messageItem/MessageItem'
import {DialogsRowType} from "../../../../models/dialogs";

type Props = {
    dialogs: DialogsRowType
}

const DialogsRow: FC<Props> = ({dialogs}) => {
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
    ))

    return (
        <div className={s.wrapDialogsRow}>
            <h3>Dialogs</h3>
            <ul>
                { dialogsElements }
            </ul>
        </div>
    )
}

export default DialogsRow
