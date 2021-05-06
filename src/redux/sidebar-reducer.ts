import { sendMessageAC} from "./dialogs-reducer";
import {addPostAC} from "./profile-reducer";


const initialState = {}

type InitialStateType = typeof initialState


const sidebarReducer =(state: InitialStateType, action: ActionsType)=>{




}


export default sidebarReducer




type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>