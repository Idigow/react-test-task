import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import {posts} from "./posts/reducer";
const logger = createLogger({
    diff: true,
    collapsed: true,
});

const rootReducer = combineReducers({
    posts
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
