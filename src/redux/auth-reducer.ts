import {authApi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";



export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

export const initialState: AuthType = {
    id: null,
    email: null ,
    login: null ,
    isAuth: false

}


export type InitialStateType = typeof initialState


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" :

            return {
                ...state,
                ...action.payload,
                // id: action.payload.id,
                // email: action.payload.email,
                // login: action.payload.login,
            }

        default:
            return state
    }
}

// export let follow = (userId: number) => ({type: "FOLLOW", userId} as const)
// export let unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
// export let setUsers = (users: Array<AuthType>) => ({type: "SET-USERS", users} as const)
// export let setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
// export let setTotalUsersCount = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
// export let toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

export let setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)

export let getAuthUserData = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export let login = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {




        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
                    dispatch<any>(stopSubmit('login', {_error: message}))
                }
            })
    }

export let logout = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

type ActionsType =
    | ReturnType<typeof setAuthUserData>

export default authReducer