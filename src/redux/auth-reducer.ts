import {Dispatch} from "redux";
import {authApi} from "../api/api";


export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean

}

export const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false

}


export type InitialStateType = typeof initialState


const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" :

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export let follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export let unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export let setUsers = (users: Array<AuthType>) => ({type: "SET-USERS", users} as const)
export let setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export let setTotalUsersCount = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
export let toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export let setAuthUserData = (data: { id: number, email: string, login: string }) => ({type: "SET-USER-DATA", data} as const)
export let getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(response => {
        if (response.data.resultCode === 0) {
// let {id, email, login } = response.data.data
            dispatch(setAuthUserData(response.data.data))    //!!! Деструктуризация
        }
    })
}

type ActionsType =
    | ReturnType<typeof setAuthUserData>

export default authReducer