import {combineReducers, createStore, applyMiddleware} from "redux";
import dialogsReducer from './dialogs-reducer'
import thunk  from "redux-thunk"
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer} from 'redux-form'

// import sidebarReducer from "./sidebar-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
    // sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer , applyMiddleware(thunk))


export default store