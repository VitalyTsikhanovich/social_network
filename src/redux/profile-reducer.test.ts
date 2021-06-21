import React from "react";
import ReactDOM from "react-dom";
import App from "../App"

import profileReducer, {addPostAC, deletePostAC, PostType} from "./profile-reducer";


it ('new post should be added', ()=>{
    let action = addPostAC("it-kamasutra")
    let state= {
        posts: [
            {id: 1, message: 'Кто ты?', countsLike: 4},
            {id: 1, message: 'Зачем', countsLike: 54},

        ]
    }
let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)

})

it ('message of new post should be correct', ()=>{
    let action = addPostAC("it-kamasutra")
    let state= {
        posts: [
            {id: 1, message: 'Кто ты?', countsLike: 4},
            {id: 1, message: 'Зачем', countsLike: 54},

        ]
    }
let newState = profileReducer(state, action)


    expect(newState.posts[2].message).toBe("it-kamasutra")
})

it ('after deleting length of message should be decrement', ()=>{
    let action = deletePostAC(1)
    let state= {
        posts: [
            {id: 1, message: 'Кто ты?', countsLike: 4},
            {id: 1, message: 'Зачем', countsLike: 54},
            {id: 1, message: 'Зачем', countsLike: 54},

        ]
    }
let newState = profileReducer(state, action)


    expect(newState.posts.length).toBe(2)
})