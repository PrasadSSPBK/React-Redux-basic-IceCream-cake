import { BUY_ICECREAM } from "./IceCreamTypes";

const intialState={
    numOfIceCreams:20
}

const IceCreamReducer=(state=intialState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:return{
            ...state,numOfIceCreams:state.numOfIceCreams-1
        }
            
           
    
        default:
            return state
    }
}

export default IceCreamReducer