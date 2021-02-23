import {PostType, RootStateProps} from "./state";
import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";


const initState = {
    dialogs: [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Леша'},
        {id: 4, name: 'Маша'}
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 1, message: 'Y'},
        {id: 1, message: 'Как дела'}
    ],
    newMessageBody: ''
}

type InitStateType = typeof initState

const dialogsReducer = (state: InitStateType = initState, action: ActionsType) => {

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