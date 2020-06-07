import React, {FC} from 'react'
import s from './PostItem.module.css'
import Avatar from '../avatar/Avatar'
import {PostType} from '../../../models/profile'

type Props = PostType & {}

const PostItem: FC<Props> = ({author, message, likesCount}) => {
    return (
        <div className={s.post}>
            <div className={s.wrapAvatar}>
                <Avatar image={null}/>
            </div>
            <div className={s.content}>
                <div className={s.text}>
                    <div className={s.name}>
                        {author}
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
    )
}

export default PostItem
