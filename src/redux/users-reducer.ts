import {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";
import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: {sity: string, country: string}
    photos: any
    pageSize: number
    totalUsersCount: number
    isFetching: boolean

}

export const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}


export type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':

            return  {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
               users: [ ...action.users]   //старые юзеры + новые
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
             currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export let followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export let unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export let setUsersAC = (users: Array<UsersType>) => ({type: "SET-USERS", users} as const)
export let setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage } as const)
export let setTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT",count: totalUsersCount } as const)
export let toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING",isFetching } as const)

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export default usersReducer