import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./UserList/UserReducer";

export const rootReducer=combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer,
    user:userReducer
})