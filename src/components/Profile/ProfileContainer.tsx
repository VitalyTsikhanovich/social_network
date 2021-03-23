import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUsersProfile} from "../../redux/profile-reducer";

import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

type UsersPropsType = MapStatePropsType & MapDispatchType
export type  MapStatePropsType = {
    profile: null
}
export type MapDispatchType = {
    setUsersProfile: (profile: null) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {

            this.props.setUsersProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)