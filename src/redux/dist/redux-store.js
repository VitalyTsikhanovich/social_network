"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var dialogs_reducer_1 = require("./dialogs-reducer");
var reducers = redux_1.combineReducers({ profileReducer: profileReducer,
    dialogsReducer: dialogs_reducer_1["default"]
});
var store = redux_1.createStore;
exports["default"] = store;
