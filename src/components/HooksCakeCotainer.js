import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeCotainer() {
    const cakeCount=useSelector(state=>state.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Cakes Hooks:{cakeCount}</h1>
        <button  onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
  )
}

export default HooksCakeCotainer