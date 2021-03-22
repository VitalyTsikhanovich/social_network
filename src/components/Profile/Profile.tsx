import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
    // profilePage: ProfilePageType
    // addPost: () => void
    // changeUpdateText: (newText: string) => void
    // dispatch: (action:ActionsType )=> void
    // store: StoreType
    // state: RootStateProps
    profile: null
}


function Profile(props: ProfileType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

        </div>
    )
}

export default Profile