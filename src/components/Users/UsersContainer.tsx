import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator, InitialStateType,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/ Preloader";
import {compose} from "redux";

import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount, getUsers,

} from "../../redux/users-selectors";


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

    setCurrentPage: (pageNumber: number) => void


    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props)
    }

    componentDidMount() {

        this.props.getUsers(this.props.pageSize, this.props.currentPage)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
                   onPageChanged={this.onPageChanged} isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   getUsers={this.props.getUsers}

            />
        </>
    }
}



export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow, unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: getUsersThunkCreator
        }),
// WithAuthRedirect
)(UsersContainer)