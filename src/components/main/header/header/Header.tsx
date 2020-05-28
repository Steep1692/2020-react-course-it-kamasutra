import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

// Is require because of ts needs css modules to declare itself
const s = require('./Header.module.css');

type Props = {
    login: string | null
    id: number | null
    isAuth: boolean
    logout: () => void
}

const Header: FC<Props> = ({login, id, isAuth, logout}) => {
    const userUrl = `/profile/${id}`;

    return (
        <header className={s.header}>
            <div>
                <a href="/">
                    <img
                        src=""
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