import {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";
import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {sity: string, country: string}
    photoUrl: string
}


export const initialState = {
    users: [] as Array<UsersType>
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
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
               users: [...state.users, ...action.users]    //старые юзеры + новые
            }

        default:
            return state
    }


}

export let followAC = (userId: number) => ({type: "FOLLOW", userId} as const)

export let unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export let setUsersAC = (users: Array<UsersType>) => ({type: "SET-USERS", users} as const)

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export default usersReducer