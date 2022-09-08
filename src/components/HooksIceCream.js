import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import buyIceCream from '../redux/IceCream/IceCreamActions'


 
  
function HooksIceCream () {
 
    const iceCreamCount=useSelector((state)=>state.iceCream.numOfIceCreams)

    const dispatch=useDispatch()
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <div className='card bg-success m-3'>
                <div className='card-header'>
                    <h1 className='text-warning' >Updating State using Hooks</h1>
                  </div>
    
            <h1 className='card-title '>IceCreams:{iceCreamCount}</h1>
            <button className='btn btn-primary' onClick={()=>dispatch(buyIceCream())}>Buy IceCreams</button>
            </div>
                </div>
            </div>
        </div>
        
      )
  
       
}

  
 
    export default HooksIceCream
