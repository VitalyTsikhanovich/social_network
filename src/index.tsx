import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

// import {addPost, changeNewText, RootStateProps} from "./redux/state";
import ReactDOM from "react-dom";

import App from "./App";
import Profile from "./components/Profile/Profile";

const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)}  state={store.getState()}/>
            {/*<App state={store.getState()} addPost={store.addPost} changeNewText={store.changeNewText}/>*/}


        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(renderTree)
renderTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
