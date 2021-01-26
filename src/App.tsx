import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsPropsType, MessagePropsType, Props} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music"
import {BrowserRouter,Switch, Route} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {PostsType, PropsArray} from "./components/Profile/MyPosts/MyPosts";
import state from "./redux/state";


function App() {
  // debugger

  return (
    <div className="App">
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>

          <div className={'app-wrapper-content'}>
            <Switch>
            <Route path='/profile' render={ ()=> <Profile posts={state.profilePage.posts}/>} />
            <Route path='/dialogs' render={ ()=> <Dialogs dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages}/>} />
            <Route path='/music' render={()=> <Music/>}/>
            <Route path='/news' render={()=> <News/>}/>
            <Route path='/setting' render={()=> <Setting/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
