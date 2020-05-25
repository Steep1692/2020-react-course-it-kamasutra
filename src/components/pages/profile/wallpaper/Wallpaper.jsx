import React from 'react';
import s from './Wallpaper.module.css';
import wallpaper from '../../../../assets/images/wallpaper.jpg';

const Wallpaper = () => {
    return (
        <div className={s.wallpaper}>
            <img
                src={wallpaper}
                alt="Wallpaper"
            />
        </div>
    );
};

export default Wallpaper;
