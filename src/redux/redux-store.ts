import {combineReducers, createStore} from "redux";

import dialogsReducer from './dialogs-reducer'
import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

export let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	// sidebar: sidebarReducer
})

export type AppStateType= ReturnType<typeof rootReducer>

let store = createStore(rootReducer)


export default store