import React from 'react';
// import logo from './logo.svg';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsPropsType, MessagePropsType, Props} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {ActionsType, RootStateProps, StoreType} from "./redux/store";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
                    <Header/>
                    <Navbar/>

                    <div className={'app-wrapper-content'}>
                        <Switch>
                            <Route path='/profile' render={() => <Profile />}/>

                            <Route path='/dialogs' render={() => <DialogsContainer />}/>

                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/setting' render={() => <Setting/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
