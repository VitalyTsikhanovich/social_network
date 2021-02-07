import s from "../Dialogs.module.css";
import {MessagePropsType} from './../Dialogs'
import state from "../../../redux/state";


function Message(props: MessagePropsType) {

    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message