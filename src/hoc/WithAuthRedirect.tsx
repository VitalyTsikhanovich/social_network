import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type mapStateToPropsType={
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}


export function WithAuthRedirect <T>(Component:ComponentType<T>) {
    const RedirectComponent=(props: mapStateToPropsType) =>{
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>        //this.props.isAuth === false
        return (
            <Component {...resProps as T}/>
        )
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent

}