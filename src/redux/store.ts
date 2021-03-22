// import {renderTree} from "../render";

import profileReducer, {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";
import dialogsReducer, {newMessageBodyAC, sendMessageAC} from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";


export type StoreType = {
    _state: RootStateProps
    addPost: () => void
    changeNewText: (newText: string) => void
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateProps
    dispatch: (action: ActionsType) => void

}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


// type AddPostActionType = {
//     type: 'ADD-POST'
//     newPostText: string
// }
// type ChangeNewTextType = {
//     type: 'CHANGE-NEW-TEXT'
//     newText: string
// }

// type AddPostActionType = ReturnType<typeof addPostAC>
//
// type ChangeNewTextType = ReturnType<typeof newTextChangeHandlerAC>

// type NewMessageBodyType = ReturnType<typeof newMessageBodyAC>
// 'NEW-MESSAGE-BODY'


 let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "Hi ",
            posts: [
                {id: 1, message: 'Кто ты?', countsLike: 4},
                {id: 1, message: 'Зачем', countsLike: 54},
            ],
            profile: null
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
            ],
            newMessageBody: ''
        },
        // sidebar: {},


    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            countsLike: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._renderTree()
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderTree()
    },

    _renderTree() {
        console.log(' state')
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage , action)
        this._state.dialogPage =  dialogsReducer(this._state.dialogPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
this._renderTree()
        // if (action.type === 'ADD-POST') {
        //     const newPost: PostType = {
        //         id: new Date().getTime(),
        //         message: this._state.profilePage.newPostText,
        //         countsLike: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._renderTree()
        // } else if (action.type === 'CHANGE-NEW-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._renderTree()
        // } else if (action.type === 'NEW-MESSAGE-BODY') {
        //     this._state.dialogPage.newMessageBody = action.body
        //     this._renderTree()
        // } else if (action.type === 'SEND-MESSAGE') {
        //     let body = this._state.dialogPage.newMessageBody
        //
        //     this._state.dialogPage.messages.push({id: 6, message: body})
        //      this._state.dialogPage.newMessageBody = ''
        //     this._renderTree()
        // }
    }
}

// let renderTree = () => {
//     console.log(' state')
// }

// export const subscribe = (observer: () => void) => {
//     renderTree = observer
// }
// export let sendMessageAC = () => {
//     return {
//         type: 'SEND-MESSAGE',
//     } as const
// }

// export let newMessageBodyAC = (body: string) => {
//     return {
//         type: 'NEW-MESSAGE-BODY',
//         body: body
//     } as const
// }


// export let addPostAC = (newPostText: string) => {
//     return {
//         type: "ADD-POST",
//         newPostText: newPostText
//     } as const
// }

// export let newTextChangeHandlerAC = (value: string) => {
//     return {
//         type: "CHANGE-NEW-TEXT",
//         newText: value
//     } as const
// }

 type PostType = {
    id: number
    message: string
    countsLike: number
}

 type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: null
    // [
    //     {userId: number
    // lookingForAJob: boolean
    // lookingForAJobDescription:string
    // fullName: string
    // contacts: object
    // github: string
    // vk: string}
    // ]

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType={

}


export type RootStateProps = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    // sidebar: SidebarType


}


// let state: RootStateProps = {
//     profilePage: {
//         newPostText: "ffff ",
//         posts: [
//             {id: 1, message: 'Кто ты?', countsLike: 4},
//             {id: 1, message: 'Зачем', countsLike: 54},
//
//         ]
//     },
//     dialogPage: {
//         dialogs: [
//             {id: 1, name: 'Иван'},
//             {id: 2, name: 'Сергей'},
//             {id: 3, name: 'Леша'},
//             {id: 4, name: 'Маша'}
//         ],
//         messages: [
//             {id: 1, message: 'Привет'},
//             {id: 1, message: 'Y'},
//             {id: 1, message: 'Как дела'}
//         ]
//     },
//     sidebar: {},
//
//
// }

// export let addPost = () => {
//     const newPost: PostType = {
//         id: new Date().getTime(),
//         message: state.profilePage.newPostText,
//         countsLike: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     renderTree()
// }


// export const changeNewText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     renderTree()
// }
export default store