import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "./ProfileContainer";




function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />

        </div>
    )
}

export default Profile