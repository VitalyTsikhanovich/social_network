// import {renderTree} from "../render";

export type StoreType = {
    _state: RootStateProps
    addPost: () => void
    changeNewText: (newText: string) => void
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateProps
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof newTextChangeHandlerAC>


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

let store: StoreType = {
    _state: {
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
        debugger
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                countsLike: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderTree()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            debugger
            this._state.profilePage.newPostText = action.newText
            this._renderTree()
        }
    }
}

// let renderTree = () => {
//     console.log(' state')
// }

// export const subscribe = (observer: () => void) => {
//     renderTree = observer
// }

export let addPostAC= (newPostText: string)=>{
    return{
type: "ADD-POST",
        newPostText: newPostText
    } as const
}

export let newTextChangeHandlerAC=(newText: string)=>{
    return{
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

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

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateProps = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType

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