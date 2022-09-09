import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserList({userData,fetchUser}) {

    useEffect(()=>{
        fetchUser()
    },[])
    
   
 
    
  return (
    <div  className='card'>
<div className='text-white card-title'>UserList</div>
<div className='card-body'>
   {userData.user.map(user=>{
    return(
    <ul key={user.id}>
    <li>{user.name}</li>
    </ul>)
  
   })}
</div>

   


    </div>
    
  )
}

const mapStateToProps=(state)=>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUser:()=>dispatch(fetchUser()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserList)