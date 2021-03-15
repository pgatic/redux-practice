import { createStore, combineReducers } from "redux";
// import reducers
import homePage from "./containers/HomePage/reducer";
import userPage from "./containers/UserPage/reducer";

// combine reducers
const reducers = combineReducers({ homePage, userPage });

// create and export store
export default createStore(reducers);
