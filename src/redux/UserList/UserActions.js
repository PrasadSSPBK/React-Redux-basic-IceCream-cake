import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"



export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
   
}

export const fetchUserSuccess=(user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }

}

export const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser=()=>{
    return(dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response)
            dispatch(fetchUserSuccess(response.data))
        }).catch((error)=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}