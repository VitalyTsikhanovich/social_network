import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import {InitStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type Props = {
    dialogPage: InitStateType
    // onNewMessageChange: (body: string) => void
    onSendMessageClick: (newMessageBody: string) => void
    // addNewMessage: ()=> void
    isAuth: boolean
    newMessageBody: string
}

let maxLength = maxLengthCreator(6)
const AddMessageForm: React.FC<InjectedFormProps<Props>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'}
                   validate={[required, maxLength ]}
                   placeholder={'enter message'}>
            </Field>
            <div>
                <button>отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<Props>({
    // a unique name for the form   уникальное имя
    form: 'dialogAddMessageForm'
})(AddMessageForm)


function Dialogs(props: Props) {
    let state = props.dialogPage
    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message}/>)
    // let newMessageBody = state.newMessageBody
    // let onSendMessageClick = () => {
        // props.onSendMessageClick()
        // props.dispatch(sendMessageAC())
    // }

    let addNewMessage = (values: Props) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.onNewMessageChange(body)
    //     // props.dispatch(newMessageBodyAC(body))
    // }
    // if (!props.isAuth) return <Redirect to={"/login"}/>      //(props.isAuth === false

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>
        </div>

    )
}



export default Dialogs