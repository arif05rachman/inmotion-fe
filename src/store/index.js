import { createStore, combineReducers, applyMiddleware } from "redux";
import { projectReducer, errorReducer, todoReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
const reducers = combineReducers({
  projectReducer,
  todoReducer,
  errorReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
