import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes";


const intialState={
    loading:true,
    user:[],
    error:''
}

const userReducer=(state=intialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:return{...state,loading:true}
            
        case FETCH_USER_SUCCESS:return{...state,loading:false,user:action.payload,error:''}

        case FETCH_USER_FAILURE:return{...state,loading:true,user:[],error:action.payload}
    
        default:
            return state
    }
}

export default userReducer