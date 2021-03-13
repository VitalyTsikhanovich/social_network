import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";


export type  MapStatePropsType={
    users: UsersType[]
}
export type MapDispatchType= {
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
    setUsers: (users:UsersType[])=> void
}

export let mapStateToProps = (state: AppStateType) :MapStatePropsType=> {
    return {
      users: state.usersPage.users
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow:(userId: number)=> {
            dispatch(followAC(userId))
        },
        unfollow:(userId: number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps )(Users)