import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css';

type DialogsPropsType = {
    name: string
    id: number

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


let dialogData =[
    {id:1 , name:'Иван' },
    {id:2 , name:'Сергей' },
    {id:3 , name:'Леша' },
    {id:4 , name:'Маша' }
]

let messageData =[
    {id:1, message:'Привет'},
    {id:1, message:'Y'},
    {id:1, message:'Как дела'}
]

function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>

    )
}

export default Dialogs