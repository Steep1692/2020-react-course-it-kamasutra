import React from 'react';
import s from './MessageForm.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../formControl/FormControl";
import {required} from "../../../utils/validations";

const MessageForm = ({handleSubmit, onSubmit}) => {
    return (
        <form
            className={s.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Field
                    component={Textarea}
                    name="messageText"
                    validate={[required]}
                />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'message',
})(MessageForm);
