import { legacy_createStore } from "redux";
import CakeReducer from "./cake/CakeReducer";

const Store=legacy_createStore(CakeReducer)
export default Store