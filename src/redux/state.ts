import {renderTree} from "../render";

export type PostType = {
    id: number
    message: string
    countsLike: number
}


export type DialogType = {
    id: number
    name: string
}

export type MessageType = {

    id: number
    message: string
}

export type ProfilePageType={
    newPostText: string
    posts: Array<PostType>

}

export type DialogPageType={
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType ={}

export type RootStateProps ={
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType

}


let state: RootStateProps = {
    profilePage: {
        newPostText: "ffff ",
        posts: [
            {id: 1, message: 'Кто ты?', countsLike: 4},
            {id: 1, message: 'Зачем', countsLike: 54},

        ]
    },
   dialogPage: {
        dialogs: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Сергей'},
            {id: 3, name: 'Леша'},
            {id: 4, name: 'Маша'}
        ],
        messages: [
            {id: 1, message: 'Привет'},
            {id: 1, message: 'Y'},
            {id: 1, message: 'Как дела'}
        ]
    },
    sidebar: {},


}
export let addPost = ()=>{
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        countsLike: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    renderTree(state)
}

export const changeNewText = (newText: string) =>{
    state.profilePage.newPostText = newText
    renderTree(state)
}
export default state