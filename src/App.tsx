import React from "react";
// import logo from './logo.svg';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

type AppPropsType = {
    // posts: Array<PostsType>
    // messages: Array<MessagePropsType>
    // // dialogs:Array<DialogsPropsType>
    // changeNewText: (newText: string) => void
    // store: StoreType
    // state: RootStateProps
    // addPost: () => void
    // dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {
    // const state = props.store.getState()

    return (
        <div className="App">
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className={'app-wrapper-content'}>
                        <Switch>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                            <Route path='/dialogs' render={() => <DialogsContainer />}/>

                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/setting' render={() => <Setting/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login />}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
