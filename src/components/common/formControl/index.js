import React from 'react';
import s from './FormControl.module.css';

class FormControl extends React.Component {
    ChildElement = () => React.createElement(this.props.childTag, {
        ...this.props.input, ...this.props.rest,
    });

    render() {
        const { meta } = this.props;
        const { touched, error } = meta;
        const hasError = touched && error;

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
        );
    }
}

export const Input = (props) => {
    return <FormControl { ...props } childTag="input"/>;
};

export const Textarea = (props) => {
    return <FormControl { ...props } childTag="textarea"/>;
};