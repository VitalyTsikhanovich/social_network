import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";


function MyPosts() {

    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>
            <textarea></textarea>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message='hi' countsLike={5}/>
                <Post message='yo' countsLike={34}/>
            </div>
        </div>
    )
}

export default MyPosts