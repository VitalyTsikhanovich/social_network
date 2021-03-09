import s from './MyPosts.module.css'
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import { addPostAC, newTextChangeHandlerAC} from "../../../redux/profile-reducer";
import {ActionsType} from "../../../redux/store";


export type PostsType = {
    id: number
    message: string
    countsLike: number
}

export type PropsArray = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    changeUpdateText: (text: string)=> void

}


function MyPosts(props: PropsArray) {

    let postsElement = props.posts.map(p => <Post message={p.message} countsLike={p.countsLike}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostAC(props.newPostText))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
   props.changeUpdateText(text)
        // props.dispatch({type: "CHANGE-NEW-TEXT", newText: value})
        // props.dispatch(newTextChangeHandlerAC(value))

    }
    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>
            <textarea onChange={newTextChangeHandler} value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts