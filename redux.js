
const redux=require('redux')
const reduxLogger=require('redux-logger')

const logger=reduxLogger.createLogger()
const applyMiddleWare=redux.applyMiddleware
const createStore=redux.legacy_createStore
const combineReducer=redux.combineReducers

const Buy_Cake="BUY_CAKE"
const ICE_CREAM="ICE_CREAM"

function buyCake(){
    return({
        type:Buy_Cake,
        info:"First Redux action"
    })
}

function iceCream(){
    return{
        type:ICE_CREAM
    }
}

const intialCakeState={cakeCount:10}
const intialIceCreamState={iceCream:20}

const cakeReducer=(state=intialCakeState,action)=>{
    switch (action.type) {
        case Buy_Cake:return{
           ...state,cakeCount:state.cakeCount-1        }
            
          
    
        default:
            return state
    }
}

const iceCreamReducer=(state=intialIceCreamState,action)=>{
    switch (action.type) {
        case ICE_CREAM:return{
           ...state,iceCream:state.iceCream-1        }
            
          
    
        default:
            return state
    }
}

const rootReducer=combineReducer({
    cake:cakeReducer,
    ice:iceCreamReducer
})

const store=createStore(rootReducer,applyMiddleWare(logger))
console.log("intialState: ",store.getState())
const subscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(iceCream())
store.dispatch(iceCream())
store.dispatch(iceCream())
store.dispatch(iceCream())
store.dispatch(iceCream())
subscribe()