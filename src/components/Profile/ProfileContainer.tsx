import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type UsersPropsType = MapStatePropsType & MapDispatchType
export type  MapStatePropsType = {
    profile: null
    status: string
    updateStatus: string
    // isAuth: boolean
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

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(2)
        }
        this.props.getUsersProfile(userId)

            this.props.getStatus(userId)
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
    updateStatus: state.profilePage.status

    // isAuth: state.auth.isAuth
})
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default WithAuthRedirect(withRouter(connect(mapStateToProps, {getUsersProfile})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect           //?
)(ProfileContainer)