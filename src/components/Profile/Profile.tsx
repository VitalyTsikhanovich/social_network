import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, RootStateProps, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
    // profilePage: ProfilePageType
    // addPost: () => void
    // changeUpdateText: (newText: string) => void
    // dispatch: (action:ActionsType )=> void
    // store: StoreType
    // state: RootStateProps
}


function Profile(props: ProfileType) {
    // console.log(props)
// debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />

        </div>
    )
}

export default Profile