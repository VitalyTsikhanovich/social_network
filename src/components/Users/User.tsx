import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../common/assets/img/userPhoto.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";


let User = (users: UsersType, followingInProgress:  Array<Number> ,follow: (userId: number) => void, unfollow: (userId: number) => void) => {

    return (
        <div>

        <span>
            <div>
               <NavLink to={'/profile/' + users.id}>
 <img src={users.photos.small != null ? users.photos.small : userPhoto} className={style.photo} alt={'avatar'}/>
               </NavLink>
    </div>
    <div>
    {users.followed
        ? <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
            unfollow(users.id)

        }}> UnFollow</button>
        : <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {

            follow(users.id)


        }}> Follow</button>}


    </div>
    </span>
            <span>
    <span>
        <div>
            {users.name}
    </div>
    <div> {users.status}</div>
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

