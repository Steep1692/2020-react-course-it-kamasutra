import React, {FC} from 'react'
import s from './MessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea} from "../formControl/FormControl"
import {required} from "../../../utils/validations"

type CustomProps =  {
    onSubmit: ({messageText}: any) => void
    captchaUrl: string | null
}

const MessageForm: FC<CustomProps & InjectedFormProps<{}, CustomProps>> = ({handleSubmit, onSubmit}) => {
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
    )
}

export default reduxForm<{}, CustomProps>({
    form: 'message',
})(MessageForm)
