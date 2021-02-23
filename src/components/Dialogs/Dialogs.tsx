import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, DialogPageType, RootStateProps} from "../../redux/state";
import React, {ChangeEvent} from "react";
import {newMessageBodyAC, sendMessageAC} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type Props = {
    // dialogs: Array<DialogsPropsType>
    //  messages: Array<MessagePropsType>
    dialogPage: DialogPageType
    dispatch: (action: ActionsType) => void
}


function Dialogs(props: Props) {
    // debugger
    let dialogElement = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.dialogPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogPage.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(newMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}

            </div>
            <div className={s.messages}>
                <div> {messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'enter message'}></textarea></div>

                    <div><button onClick={onSendMessageClick}>отправить</button></div>
                </div>


            </div>
        </div>

    )
}

export default Dialogs