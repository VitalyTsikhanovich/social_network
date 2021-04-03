import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';


type UsersPropsType = MapStatePropsType & MapDispatchType
export type  MapStatePropsType = {
    profile: null
    isAuth: boolean
}
export type MapDispatchType = {
    getUsersProfile: (userId: string) => void
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
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>        //this.props.isAuth === false
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent)