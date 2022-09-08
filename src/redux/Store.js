import { legacy_createStore,applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";



const Store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger))
    )
export default Store