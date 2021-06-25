import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../common/assets/img/userPhoto.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";

type UserPropsType = {
    user: UsersType
    followingInProgress: Array<Number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


let User = ({user, followingInProgress, unfollow, follow, ...props}: UserPropsType) => {

    return (
        <div>

        <span>
            <div>
               <NavLink to={'/profile/' + user.id}>
 <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.photo} alt={'avatar'}/>
               </NavLink>
    </div>
    <div>
    {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unfollow(user.id)

        }}> UnFollow</button>
        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

            follow(user.id)


        }}> Follow</button>}


    </div>
    </span>
            <span>
    <span>
        <div>
            {user.name}
    </div>
    <div> {user.status}</div>
    </span>
    <span>
    <div> {'u.location.country'}</div>
    <div> {'u.location.sity'}</div>
    </span>
    </span>
        </div>

    )
}

export default User

