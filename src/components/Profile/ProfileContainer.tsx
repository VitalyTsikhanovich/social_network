import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import { withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

import {compose} from "redux";


type UsersPropsType = MapStatePropsType & MapDispatchType
export type  MapStatePropsType = {
    profile: null
    status: string
    updateStatus: string
    authorizedUserId: number | null
    isAuth: boolean
}
export type MapDispatchType = {
    getUsersProfile: (userId: string) => void
    getStatus: (userId: string) => void
}

export type PropsType = RouteComponentProps<PathParamsType> & UsersPropsType

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile (){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)

        this.props.getStatus(userId)
    }



    componentDidMount() {
       this.refreshProfile()
       }


       componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if( this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }

       }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"/login"}/>        //this.props.isAuth === false
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
   status: state.profilePage.status,
    updateStatus: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

    // isAuth: state.auth.isAuth
})
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default WithAuthRedirect(withRouter(connect(mapStateToProps, {getUsersProfile})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect           //?
)(ProfileContainer)