import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";

export const rootReducer=combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer
})