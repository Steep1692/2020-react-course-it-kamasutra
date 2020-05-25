import React from 'react';
import s from './LoginForm.module.css';
import {Field, reduxForm} from "redux-form";
import { Input } from "../../../common/formControl";
import {required} from "../../../../utils/validations";

const LoginForm = (props) => {
    const { handleSubmit, onFormSubmit, error, } = props;
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstName">Login</label>
            <div>
                <Field
                    name="email"
                    component={Input}
                    validate={[required]}
                    type="email"
                />
            </div>
            <label htmlFor="email">Password</label>
            <div>
                <Field
                    name="password"
                    component={Input}
                    validate={[required]}
                    type="password"
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                /> Remember me
            </div>
            <div>
                { error && <span>{ error }</span> }
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default reduxForm({
        form: 'login',
    })(LoginForm);
