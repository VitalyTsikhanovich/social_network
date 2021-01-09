import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";


let postData =[
    {id:1, message:'Кто ты?', countsLike:4},
    {id:1, message:'Зачем', countsLike:54}
]

function MyPosts() {

    return (
        <div>
            <div>
                <h3>new post</h3>
            </div>
            <textarea></textarea>
            <button>Add post</button>

            <div className={s.posts}>
                <Post message={postData[0].message} countsLike={postData[0].countsLike}/>
                <Post message={postData[1].message} countsLike={postData[1].countsLike}/>
            </div>
        </div>
    )
}

export default MyPosts