import s from "../Dialogs.module.css";
import {DialogsPropsType} from './../Dialogs'
import {NavLink} from 'react-router-dom'

function DialogItem(props: DialogsPropsType) {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem