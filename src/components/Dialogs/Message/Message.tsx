import s from "../Dialogs.module.css";
import {MessagePropsType} from './../Dialogs'



function Message(props: MessagePropsType) {

    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message