import {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";
import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";


const initialState = {}

type InitialStateType = typeof initialState


const sidebarReducer =(state: InitialStateType, action: ActionsType)=>{




}


export default sidebarReducer




type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>