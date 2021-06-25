import React from "react";
import {MapDispatchType, MapStatePropsType} from "./UsersContainer";
import Paginator from "../../utils/paginator/paginator";
import User from "./User";


type UsersPropsType = MapStatePropsType & MapDispatchType & UsersAPITypeProps

export type UsersAPITypeProps = {
    onPageChanged: (p: number) => void
}

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize, ...props}: UsersPropsType) => {


    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize} portionSize={portionSize}/>
            {
                props.users.map(u => <User key={u.id} user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}/>
                )
            }
        </div>
    )
}


export default Users

