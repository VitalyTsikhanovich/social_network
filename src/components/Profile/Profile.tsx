import React from "react";
import s from './Profile.module.css'
import MyPosts, {PropsArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {changeNewText, ProfilePageType} from "../../redux/state";


type ProfileType = {
    state: ProfilePageType
    addPost: () => void
    changeUpdateText: (newText: string) => void
}


function Profile(props: ProfileType) {
    // console.log(props)
// debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText}
                     changeUpdateText={props.changeUpdateText}/>

        </div>
    )
}

export default Profile