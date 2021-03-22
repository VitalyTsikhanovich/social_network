import {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";

export type PostType = {
    id: number
    message: string
    countsLike: number
}

export const initialState = {
    newPostText: "Hi ",
    posts: [
        {id: 1, message: 'Кто ты?', countsLike: 4},
        {id: 1, message: 'Зачем', countsLike: 54},

    ] as Array<PostType>,
    profile: null
}
export type InitialStateType = typeof initialState


const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                countsLike: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
// let stateCopy = {...state}
// stateCopy.posts = [...state.posts]
//             stateCopy.posts.push(newPost)
//             stateCopy.newPostText = ''
        // state.posts.push(newPost)
        // state.newPostText = ''
        // return stateCopy
        case 'CHANGE-NEW-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }

        default:
            return state
    }


}

export let addPostAC = () => ({type: "ADD-POST"} as const)

export let newTextChangeHandlerAC = (value: string) => ({type: "CHANGE-NEW-TEXT", newText: value} as const)
export let setUsersProfile = (profile: null) => ({type: "SET-USERS-PROFILE", profile} as const)
type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUsersProfile>

export default profileReducer