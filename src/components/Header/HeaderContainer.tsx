import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType,  setAuthUserData} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";
;

export type MapDispatchType={
    setAuthUserData: (data:AuthType)=>void
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
        userAPI.getUsers().then(data => {
if (data.resultCode === 0){
// let {id, email, login } = response.data.data
    this.props.setAuthUserData(data.data)    //!!! Деструктуризация
}
        })
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

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)