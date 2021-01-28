import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType={
    state:ProfilePageType
    addPost: (textPost: string)=>void
}


function Profile(props: ProfileType) {
    // console.log(props)
// debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile