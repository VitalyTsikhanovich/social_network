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
    // let stateCopy
    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
       return    {
                ...state,
                newMessageBody: action.body
            }
            // stateCopy.newMessageBody = action.body
            // state.newMessageBody = action.body
            // return stateCopy
                                                   // break
        case 'SEND-MESSAGE':

            let body = state.newMessageBody
            // stateCopy=
           return      {
                ...state,
                newMessageBody : '',
                messages: [...state.messages, {id: 6, message: body}]                 //вместо push
            }

            // let stateCopy = {...state}
            // stateCopy.messages = [...state.messages]
            // stateCopy.messages.push({id: 6, message: body})
            // stateCopy.newMessageBody = ''
            // state.messages.push({id: 6, message: body})
            // state.newMessageBody = ''
            // return stateCopy
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