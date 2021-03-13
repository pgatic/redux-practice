import { createStore, combineReducers } from "redux";
// import reducers
import homePage from "./containers/HomePage/reducers";

// combine reducers
const reducers = combineReducers({ homePage });

// create and export store
export default createStore(reducers);
