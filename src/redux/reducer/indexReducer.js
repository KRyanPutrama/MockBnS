import { combineReducers } from "redux";
import Cart from './cart';
import Blogs from "./blogs";
import auth from "./Auth";


export default combineReducers({
    Cart, Blogs, auth
})