import {userAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";


export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { sity: string, country: string }
    photos: {
        small: string
        large: string
    }
    pageSize: number
    totalUsersCount: number
    isFetching: boolean

}

export const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<Number>

}


export type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':

            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                 users:
                state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]   //старые юзеры + новые
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
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export let followsSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export let unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export let setUsers = (users: Array<UsersType>) => ({type: "SET-USERS", users} as const)
export let setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export let setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    count: totalUsersCount
} as const)
export let toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export let toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
} as const)

export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
let followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
    //     withCredentials: true,
    //     headers: {
    //         "API-KEY": "45e88326-78f0-45ca-b953-491c7fd66778"
    //     }
    //     })

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userId), followsSuccess)

    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userId), unfollowSuccess)
    }
}


export type ActionsType =
    | ReturnType<typeof followsSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export default usersReducer