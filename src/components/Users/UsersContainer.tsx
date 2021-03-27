import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    follow, InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import React from "react";

import Users from "./Users";
import Preloader from "../common/Preloader/ Preloader";
import {userAPI} from "../../api/api";




type UsersPropsType = MapStatePropsType & MapDispatchType & InitialStateType

export type  MapStatePropsType = InitialStateType
    // {
    // users: UsersType[],
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: InitialStateType []
//
// }

export type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean)=>void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    render() {

        // return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        //               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
        //               users={this.props.users}
        // follow={this.props.follow}
        //               unfollow={this.props.unfollow}
        // />
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                        follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers}
                        setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                        onPageChanged={this.onPageChanged} isFetching={this.props.isFetching} toggleIsFetching={this.props.toggleIsFetching}
                   followingInProgress={this.props.followingInProgress} toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>


    }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    {follow, unfollow,
        setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer)