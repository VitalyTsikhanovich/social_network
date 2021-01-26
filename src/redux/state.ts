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

type ProfilePageType={
    posts: Array<PostType>
}

type DialogPageType={
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType={
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Кто ты?', countsLike: 4},
            {id: 1, message: 'Зачем', countsLike: 54},
            {id: 1, message: 'Зачем', countsLike: 54},
            {id: 1, message: 'Зачем', countsLike: 54},
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
    }

}

export default state