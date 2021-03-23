import {combineReducers, createStore} from "redux";

import dialogsReducer from './dialogs-reducer'

import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

// import sidebarReducer from "./sidebar-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
    // sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)


export default store