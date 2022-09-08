import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeCotainer() {
    const cakeCount=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div className='container'>
            <div className='row'>
                <div className='col'>
                <div className='card bg-success m-3'>
                  <div className='card-header'>
                    <h1 className='text-warning' >Updating State using Hooks</h1>
                  </div>

        <h1>Cakes :{cakeCount}</h1>
        <button className='btn btn-primary' onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
        </div>
        </div>
        </div>
  )
}

export default HooksCakeCotainer