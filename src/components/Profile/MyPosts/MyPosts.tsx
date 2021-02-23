import s from './MyPosts.module.css'
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import { addPostAC, newTextChangeHandlerAC} from "../../../redux/profile-reducer";
import {ActionsType} from "../../../redux/state";


export type PostsType = {
    id: number
    message: string
    countsLike: number
}

export type PropsArray = {
    posts: Array<PostsType>
    // addPost: () => void
    // changeUpdateText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsType) => void


}


function MyPosts(props: PropsArray) {
    // debugger
    let postsElement = props.posts.map(p => <Post message={p.message} countsLike={p.countsLike}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        // props.addPost()
    }
// let onPostChange =()=>{
//
//
//
// }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let value = e.currentTarget.value
        // props.dispatch({type: "CHANGE-NEW-TEXT", newText: value})
        props.dispatch(newTextChangeHandlerAC(value))

    }
    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>
            <textarea onChange={newTextChangeHandler} value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts