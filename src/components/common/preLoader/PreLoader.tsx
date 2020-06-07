import React, {FC} from 'react'
import s from './PreLoader.module.css'

const PreLoader: FC = () => {
    return (
        <div className={s.preLoader}>
            LOADING...
        </div>
    )
}

export default PreLoader
