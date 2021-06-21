import React from "react";
// import logo from './logo.svg';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music"
import { Switch, Route} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/ Preloader";

type AppPropsType = {
    // posts: Array<PostsType>
    // messages: Array<MessagePropsType>
    // // dialogs:Array<DialogsPropsType>
    // changeNewText: (newText: string) => void
    // store: StoreType
    // state: RootStateProps
    // addPost: () => void
    // dispatch: (action: ActionsType) => void
    initializeApp: ()=> void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // const state = props.store.getState()
        if (! this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className="App">
                    <div className='app-wrapper'>
                        <HeaderContainer getAuthUserData={getAuthUserData}/>
                        <Navbar/>

                        <div className={'app-wrapper-content'}>
                            <Switch>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/setting' render={() => <Setting/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/login' render={() => <Login/>}/>
                            </Switch>
                        </div>
                    </div>
            </div>
        );
    }
}

type  MapStatePropsType = {
    initialized: boolean
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
