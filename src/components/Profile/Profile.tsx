import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ActionsType, ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType
    // addPost: () => void
    // changeUpdateText: (newText: string) => void
    dispatch: (action:ActionsType )=> void
}


function Profile(props: ProfileType) {
    // console.log(props)
// debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile