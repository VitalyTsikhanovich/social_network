import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


export const  getUsersSelect =(state:AppStateType)=>{
    return state.usersPage.users
}
export const  getUsers = createSelector(getUsersSelect,(users)=>{
    return  users.filter(u=> true)
})




export const  getTotalUsersCount =(state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}
export const  getCurrentPage =(state:AppStateType)=>{
    return state.usersPage.currentPage
}
export const  getIsFetching =(state:AppStateType)=>{
    return state.usersPage.isFetching
}
export const  getFollowingInProgress =(state:AppStateType)=>{
    return state.usersPage.followingInProgress
}
export const  getPageSize =(state:AppStateType)=>{
    return state.usersPage.pageSize
}