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
import {ActionsType, RootStateProps, StoreType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    // posts: Array<PostsType>
    // messages: Array<MessagePropsType>
    // // dialogs:Array<DialogsPropsType>
    // changeNewText: (newText: string) => void
    // store: StoreType
    state: RootStateProps
    // addPost: () => void
    dispatch: (action:ActionsType )=> void
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
                            <Route path='/profile' render={() =>
                                <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                            <Route path='/dialogs' render={() =>
                                <Dialogs state={props.state.dialogPage}/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/setting' render={() => <Setting/>}/>
                            <Route path='/sidebar' render={() => <Sidebar/>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
