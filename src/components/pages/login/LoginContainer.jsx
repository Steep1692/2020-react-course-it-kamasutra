import React from 'react';
import s from './LoginContainer.module.css';

import LoginForm from "./loginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../../redux/reducers/auth";

class LoginContainer extends React.Component {
    onFormSubmit = (formData) => {
        this.props.login(formData);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <LoginForm onFormSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, {login})(LoginContainer);
