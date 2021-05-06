import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppType = {
    initialized: boolean
}

export const initialState: AppType = {
    initialized: false
}


export type InitialStateType = typeof initialState


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":

            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export let initializedSuccess = () => (
    {type: "INITIALIZED-SUCCESS"} as const)

export let initializeApp = () =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }


type ActionsType =
    | ReturnType<typeof initializedSuccess>

export default appReducer