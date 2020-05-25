import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({login, id, isAuth, logout}) => {
    const userUrl = `/profile/${id}`;

    return (
        <header className={s.header}>
            <div>
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/White_flag_icon.svg/1200px-White_flag_icon.svg.png"
                        alt="Logotype"
                    />
                </a>
            </div>
            <div className={s.blockRight}>
                {isAuth && <div><a href={userUrl}>{ login }</a> - <button onClick={logout}>Logout</button></div>}
                {!isAuth && <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
