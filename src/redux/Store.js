import { legacy_createStore } from "redux";
import { rootReducer } from "./rootReducer";


const Store=legacy_createStore(rootReducer)
export default Store