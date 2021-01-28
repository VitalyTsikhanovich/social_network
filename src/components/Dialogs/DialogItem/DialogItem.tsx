import s from "../Dialogs.module.css";
import {DialogsPropsType} from './../Dialogs'
import {NavLink} from 'react-router-dom'

function DialogItem(props: DialogsPropsType) {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://avatars.mds.yandex.net/get-mpic/1927699/img_id1320871121397965407.jpeg/orig" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem