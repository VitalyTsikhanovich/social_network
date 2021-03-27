
export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: {sity: string, country: string}
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
    isFetching: true ,
    followingInProgress: [] as Array <Number>

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
        case "TOGGLE-IS-FOLLOWING-PROGRESS":{
            return {
                ...state,
                followingInProgress: action.isFetching
? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id != action.userId)
            }
            }
        default:
            return state
    }
}

export let follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export let unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export let setUsers = (users: Array<UsersType>) => ({type: "SET-USERS", users} as const)
export let setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage } as const)
export let setTotalUsersCount = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT",count: totalUsersCount } as const)
export let toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING",isFetching } as const)
export let toggleFollowingProgress=(isFetching: boolean, userId: number)=>({type: "TOGGLE-IS-FOLLOWING-PROGRESS" , isFetching, userId} as const)

type ActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export default usersReducer