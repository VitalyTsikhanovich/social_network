import {PostType} from "./state";
import {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";

const initialState = {
    newPostText: "Hi ",
    posts: [
        {id: 1, message: 'Кто ты?', countsLike: 4},
        {id: 1, message: 'Зачем', countsLike: 54},

    ]
}
type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                countsLike: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export let addPostAC = (newPostText: string) => ({type: "ADD-POST", newPostText: newPostText} as const)

export let newTextChangeHandlerAC = (value: string) => ({type: "CHANGE-NEW-TEXT", newText: value} as const)

type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export default profileReducer