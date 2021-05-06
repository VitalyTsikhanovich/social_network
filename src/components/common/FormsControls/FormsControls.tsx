import React from "react";
import style from './FormsControls.module.css'
import {WrappedFieldProps} from "redux-form";    // типизация форм/meta


export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...resProps} = props
    return (
        <FormControl {...props}> <textarea {...input} {...resProps}/> </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...resProps} = props
    return (
        <FormControl {...props}> <input {...input} {...resProps}/></FormControl>
    )
}