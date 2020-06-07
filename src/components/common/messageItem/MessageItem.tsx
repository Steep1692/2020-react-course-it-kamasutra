import React, {FC} from 'react'
import s from './MessageItem.module.css'
import Avatar from "../avatar/Avatar"
import {MessageType} from "../../../models/dialogs"

type Props = MessageType & {
    onClick: (...args: any) => void
}

const MessageItem: FC<Props> = ({author, message, onClick}) => {
    return (
        <div
            className={s.messageItem}
            onClick={onClick}
        >
            <div className={s.wrapAvatar}>
                <a href="#!">
                    <Avatar image={null}/>
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
    )
}

export default MessageItem
