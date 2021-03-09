
import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


const initialState = {
    dialogs: [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Леша'},
        {id: 4, name: 'Маша'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Привет'},
        {id: 1, message: 'Y'},
        {id: 1, message: 'Как дела'}
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type InitStateType = typeof initialState

const dialogsReducer = (state: InitStateType = initialState, action: ActionsType): InitStateType => {

    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state                                                 // break
        case 'SEND-MESSAGE':
            let body = state.newMessageBody

            state.messages.push({id: 6, message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }


}
export let sendMessageAC = () => ({type: 'SEND-MESSAGE',} as const)

export let newMessageBodyAC = (body: string) => ({type: 'NEW-MESSAGE-BODY', body: body} as const)

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


export default dialogsReducer