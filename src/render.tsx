import {addPost, changeNewText, RootStateProps} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderTree = (state: RootStateProps) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>


        </React.StrictMode>,
        document.getElementById('root')
    );
}