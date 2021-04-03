import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import {DialogPageType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import {InitStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type Props = {
    dialogPage: InitStateType
    onNewMessageChange: (body: string) => void
    onSendMessageClick: () => void
    isAuth: boolean
}


function Dialogs(props: Props) {
    let state = props.dialogPage
    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
        // props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.onNewMessageChange(body)
        // props.dispatch(newMessageBodyAC(body))
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>      //(props.isAuth === false

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}

            </div>
            <div className={s.messages}>
                <div> {messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'enter message'}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>отправить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs