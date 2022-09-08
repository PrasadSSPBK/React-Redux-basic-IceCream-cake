import React, { useState } from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'


function NewCakeWithPayload(props) {
   const [count,setCount]=useState(1)

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <div className='card bg-success m-3'>
            <div className='card-header'>
                    <h1 className='text-warning' >Updating State With Payload</h1>
                  </div>

        <h1 className='card-title r'>Cakes:{props.numOfCakes}</h1>
        <input type="text"   className='m-1' value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className='btn btn-primary mb-1' onClick={()=>props.buyCake(count)}>Buy {count } Cakes</button>
        </div>
            </div>
        </div>
    </div>
    
  )
}

const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatcToProps=(dispatch)=>{
    return{
       buyCake:(count)=> dispatch(buyCake(count))
    }
}

export default connect(mapStateToProps,mapDispatcToProps) (NewCakeWithPayload)