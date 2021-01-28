import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Simulate} from "react-dom/test-utils";


export type PostsType = {
    id: number
    message: string
    countsLike: number
}

export type PropsArray = {
    posts: Array<PostsType>
    addPost: (textPost: string) => void
}


function MyPosts(props: PropsArray) {
    // debugger
    let postsElement = props.posts.map(p => <Post message={p.message} countsLike={p.countsLike}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }


    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts