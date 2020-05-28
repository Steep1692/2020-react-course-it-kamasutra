import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../../../common/formControl/FormControl";
import {required} from "../../../../utils/validations";

// Used required to not to create declaration file for css module
let s = require('./LoginForm.module.css');

type CustomProps =  {
    onFormSubmit: (...args: any) => void
    captchaUrl: string | null
}

const LoginForm: FC<CustomProps & InjectedFormProps<{}, CustomProps>> = (props) => {
    const { handleSubmit, onFormSubmit, error, captchaUrl, } = props;
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
            { captchaUrl && <div>
                <img src={captchaUrl} alt="Captcha image"/>
                <Field
                    name="captcha"
                    component={Input}
                    validate={[required]}
                    type="text"
                />
            </div> }
            <div className={s.errorMessage}>
                { error && <span>{ error }</span> }
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default reduxForm<{}, CustomProps>({
        form: 'login',
    })(LoginForm);
