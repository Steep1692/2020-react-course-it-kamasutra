import React from 'react';

import LoginForm from "./loginForm/LoginForm";
import {connect, ConnectedProps} from "react-redux";
import {login} from "../../../redux/reducers/auth";
import {Credentials} from "../../../models/auth";
import {AppStateType} from "../../../redux/store";

// Used required to not to create declaration file for css module
let s = require('./LoginContainer.module.css');

const mapState = ({security}: AppStateType) => ({
    captchaUrl: security.captchaUrl,
});
const mapDispatch = {
    login,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

class LoginContainer extends React.Component<Props> {
    onFormSubmit = ({ email, password, rememberMe = false, captcha }: Credentials) => {
        this.props.login({
            email, password, rememberMe, captcha,
        });
    }

    render() {
        const { captchaUrl } = this.props;

        return (
            <div>
                <h2>Login</h2>
                <LoginForm
                    captchaUrl={captchaUrl}
                    onFormSubmit={this.onFormSubmit}
                />
            </div>
        );
    }
}

export default connector(LoginContainer);
