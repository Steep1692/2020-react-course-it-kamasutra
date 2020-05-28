import React, {FC} from 'react';
import Header from "./header/Header";
import {connect, ConnectedProps} from "react-redux";
import {authMe, logout,} from "../../../redux/reducers/auth";
import {AppStateType} from "../../../redux/store";
import {getCurrentUserId, getIsAuth, getLogin} from "../../../redux/selectors/auth";

// Is require because of ts needs css modules to declare itself
const s = require('./HeaderContainer.module.css');

const mapState = (state: AppStateType) => ({
    login: getLogin(state),
    id: getCurrentUserId(state),
    isAuth: getIsAuth(state),
});
const mapDispatch = {
    authMe,
    logout,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const HeaderContainer: FC<Props> = (props) => {
    const {
        login,
        id,
        logout,
        isAuth,
    } = props;

    return (
        <Header
            isAuth={isAuth}
            login={login}
            id={id}
            logout={logout}
        />
    );
};

export default connector(HeaderContainer);
