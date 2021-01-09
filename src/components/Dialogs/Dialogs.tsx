import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css';

type DialogsPropsType = {
    name: string
    id: string

}

function DialogItem(props: DialogsPropsType) {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='eshor' id="1"/>
                <DialogItem name='helena' id="2"/>
                <DialogItem name='piter' id="3"/>
                <DialogItem name='elsa' id="4"/>
            </div>
            <div className={s.messages}>
                <Message message='hey'/>
                <Message message='yo'/>
                <Message message='bye'/>
            </div>
        </div>

    )
}

export default Dialogs