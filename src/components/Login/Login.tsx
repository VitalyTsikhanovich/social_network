import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";



type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    login: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       validate={[required]}
                       name={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'} type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form   уникальное имя
    form: 'login'
})(LoginForm)


const Login = ({...props}) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        // console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {login})(Login)