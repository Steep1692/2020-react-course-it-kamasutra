import React, {FC} from 'react'
import s from './Avatar.module.css'
import defaultAvatar from '../../../assets/images/profileAvatar.png'

type Props = {
    image: string | null
}

const Avatar: FC<Props> = ({image = null}) => {
    return (
        <div className={s.wrapAvatar}>
            <img
                src={image || defaultAvatar}
                alt="Avatar"
            />
        </div>
    )
}

export default Avatar
