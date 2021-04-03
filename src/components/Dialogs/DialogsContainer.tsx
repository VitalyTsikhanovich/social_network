
import React from "react";
import {InitStateType, newMessageBodyAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type ContainerProps = {
    // dialogs: Array<DialogsPropsType>
    //  messages: Array<MessagePropsType>
    // dialogPage: DialogPageType
    // dispatch: (action: ActionsType) => void

}
export type DialogPropType = MapStatePropsType | MapDispatchType


// function DialogsContainer(props: ContainerProps) {
//     // let state = props.dialogPage
//     //
//     // let onSendMessageClick = () => {
//     //     props.dispatch(sendMessageAC())
//     // }
//     // let onNewMessageChange = (body: string) => {
//     //     props.dispatch(newMessageBodyAC(body))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//                 let onNewMessageChange = (body: string) => {
//                     store.dispatch(newMessageBodyAC(body))
//                 }
//                 return <Dialogs dialogPage={store.getState().dialogPage}
//                                 newMessageBody={onNewMessageChange}
//                                 sendMessage={onSendMessageClick}/>
//             }
//
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }

type  MapStatePropsType={
    dialogPage: InitStateType
    isAuth: boolean
}
type MapDispatchType= {
    onSendMessageClick: ()=>void
    onNewMessageChange: (body: string)=> void
}

let mapStateToProps = (state: AppStateType) :MapStatePropsType=> {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onSendMessageClick:()=> {
            dispatch(sendMessageAC())
        },
        onNewMessageChange:(body: string)=> {
            dispatch(newMessageBodyAC(body))
        }
    }
}

export let SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default SuperDialogsContainer