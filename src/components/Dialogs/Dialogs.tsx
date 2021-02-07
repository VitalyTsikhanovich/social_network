import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, RootStateProps} from "../../redux/state";
import React from "react";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type Props={
    // dialogs: Array<DialogsPropsType>
    //  messages: Array<MessagePropsType>
    state: DialogPageType
}


function Dialogs(props: Props) {
    // debugger
    let dialogElement =props.state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m=><Message message={m.message}/>)

    let addNewPost = React.createRef<HTMLTextAreaElement>()
    let newPost =()=>{
     let text = addNewPost.current?.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}

            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={addNewPost} ></textarea>
                <button onClick={newPost}>отправить</button>
            </div>
        </div>

    )
}

export default Dialogs