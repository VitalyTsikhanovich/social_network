import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import dialogsReducer from './dialogs-reducer'
import thunk  from "redux-thunk"
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import  { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

// import sidebarReducer from "./sidebar-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)
// ));

let store = createStore(rootReducer , applyMiddleware(thunk))


export default store