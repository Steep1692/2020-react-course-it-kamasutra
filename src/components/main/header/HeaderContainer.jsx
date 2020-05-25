import React from 'react';
import s from './HeaderContainer.module.css';
import Header from "./header/Header";
import {connect} from "react-redux";
import {
    authMe, logout,
} from "../../../redux/reducers/auth";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        const {
            login,
            id,
            logout,
        } = this.props;

        return (
            <Header
                login={login}
                id={id}
                logout={logout}
            />
        )
    }
}

const mapStateToProps = ({auth}) => ({
    login: auth.login,
    id: auth.id,
    isAuth: auth.isAuth,
});

export default connect(mapStateToProps, {
    authMe,
    logout,
})(HeaderContainer);
