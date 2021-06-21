import {Dispatch} from "redux";
import {profileApi, userAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    countsLike: number
}

export const initialState = {
    posts: [
        {id: 1, message: 'Кто ты?', countsLike: 4},
        {id: 1, message: 'Зачем', countsLike: 54},

    ] as Array<PostType>,
    profile: null,
    status: "",
    newPostText: "",
    postId: null
}
export type InitialStateType = typeof initialState


const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                countsLike: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "DELETE-POST": {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
// let stateCopy = {...state}
// stateCopy.posts = [...state.posts]
//             stateCopy.posts.push(newPost)
//             stateCopy.newPostText = ''
        // state.posts.push(newPost)
        // state.newPostText = ''
        // return stateCopy
        // case 'CHANGE-NEW-TEXT': {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }

        default:
            return state
    }
}

export let addPostAC = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export let deletePostAC = (postId: number) => ({type: "DELETE-POST", postId} as const)
// export let newTextChangeHandlerAC = (value: string) => ({type: "CHANGE-NEW-TEXT", newText: value} as const)
export let setUsersProfile = (profile: null) => ({type: "SET-USERS-PROFILE", profile} as const)
export let setStatus = (status: string) => ({type: "SET-STATUS", status} as const)

export let getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export let updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export let getUsersProfile = (userId: string) => async (dispatch: Dispatch) => {       //санка
    let response = await userAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    // | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>

export default profileReducer