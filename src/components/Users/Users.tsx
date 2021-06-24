import React from "react";
import style from "./Users.module.css";
import userPhoto from "../common/assets/img/userPhoto.png";
import {MapDispatchType, MapStatePropsType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import Paginator from "../../utils/paginator/paginator";


type UsersPropsType = MapStatePropsType & MapDispatchType & UsersAPITypeProps

export type UsersAPITypeProps={
    onPageChanged: (p: number)=>void
}

let Users =({totalUsersCount,pageSize,currentPage,onPageChanged,...props}:UsersPropsType)=>{
    // let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // let pages = []
    // for (let i = 1; i<=pagesCount; i++){
    //     pages.push(i)
    // }



    return (
        <div>
        {/*    <div>*/}
        {/*        {pages.map(p=>{*/}
        {/*                return    <span className={props.currentPage === p ? style.selectedPage: ''}*/}
        {/*                onClick={(event)=>{props.onPageChanged(p)}}> {p}</span>*/}
        {/*            })}*/}
        {/*</div>*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
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
            ? <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
props.unfollow(u.id)

    }}> UnFollow</button>
    : <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {

      props.follow(u.id)


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
    )
}

export default Users

