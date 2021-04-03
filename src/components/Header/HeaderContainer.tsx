import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { getAuthUserData} from "../../redux/auth-reducer";



export type MapDispatchType={
    getAuthUserData: ()=>void
}

export type MapStatePropsType={
    id: number | null
    email:  string | null
    login: string | null,
    isAuth: boolean
}
export type UsersPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}



export let mapStateToProps = (state:AppStateType): MapStatePropsType =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id
})

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer)