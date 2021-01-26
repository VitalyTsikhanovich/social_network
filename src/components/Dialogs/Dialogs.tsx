import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type Props={
    dialogs: Array<DialogsPropsType>
     messages: Array<MessagePropsType>
}


function Dialogs(props: Props) {
    debugger
    let dialogElement =props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m=><Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    )
}

export default Dialogs