import React from 'react'
import s from './FormControl.module.css'
import {WrappedFieldProps} from "redux-form"

// If necessary use type for field generic attrs - GenericFieldHTMLAttributes

type FormControlProps = WrappedFieldProps & {
    childTag: string
}

class FormControl extends React.Component<FormControlProps> {
    // Is here to avoid rerender of ChildElement
    ChildElement = () => {
        const { input, childTag, meta, ...rest } = this.props

        return React.createElement(this.props.childTag, {
            ...input, ...rest,
        })
    }

    render() {
        const { meta } = this.props
        const { touched, error } = meta
        const hasError = touched && error

        const ChildElement = this.ChildElement

        return (
            <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
                <div>
                    <ChildElement />
                </div>
                <div>
                    <span>{ hasError && error }</span>
                </div>
            </div>
        )
    }
}

export const Input = (props: WrappedFieldProps) => {
    return <FormControl { ...props } childTag="input"/>
}

export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl { ...props } childTag="textarea"/>
}