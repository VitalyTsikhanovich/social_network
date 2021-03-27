import React from "react";
import style from "./Users.module.css";
import userPhoto from "../common/assets/img/userPhoto.png";
import {MapDispatchType, MapStatePropsType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import axios from "axios";



type UsersPropsType = MapStatePropsType & MapDispatchType & UsersAPITypeProps

type UsersAPITypeProps={
    onPageChanged: (p: number)=>void
}

let Users =(props: UsersPropsType)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i<=pagesCount; i++){
        pages.push(i)
    }

    return <div>
            <div>
                {pages.map(p=>{
                        return    <span className={props.currentPage === p ? style.selectedPage: ''}
                        onClick={(event)=>{props.onPageChanged(p)}}> {p}</span>
                    })}
        </div>
    {
        props.users.map(u => <div key={u.id}>
        <span>
            <div>
               <NavLink to={'/profile/' + u.id}>
 <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo} alt={'avatar'}/>
               </NavLink>
    </div>
    <div>
    {u.followed
            ? <button disabled={props.followingInProgress.some(id=> id==u.id)} onClick={() => {
props.toggleFollowingProgress(true, u.id)
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "45e88326-78f0-45ca-b953-491c7fd66778"
                    }
                })
                .then(response => {
                if (response.data.resultCode == 0){
                    props.unfollow(u.id)
                }
                    props.toggleFollowingProgress(false, u.id)
            })

    }}> UnFollow</button>
    : <button disabled={props.followingInProgress.some(id=> id==u.id)} onClick={() => {
            props.toggleFollowingProgress(true, u.id)
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "45e88326-78f0-45ca-b953-491c7fd66778"
                }
                }
            ).then(response => {
           if (response.data.resultCode == 0){
               props.follow(u.id)
           }
                props.toggleFollowingProgress(false, u.id)
            })


    }}> Follow</button>}


    </div>
    </span>
    <span>
    <span>
        <div>
            {u.name}
    </div>
    <div> {u.status}</div>
    </span>
    <span>
    <div> {'u.location.country'}</div>
    <div> {'u.location.sity'}</div>
    </span>
    </span>
    </div>)
    }
        </div>
}

export default Users

