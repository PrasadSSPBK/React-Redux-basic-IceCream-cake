import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'


function Cake(props) {
  return (
    <div>
        <h1>Cakes:{props.numOfCakes}</h1>
        <button className='"h1' onClick={props.buyCake}>Buy Cakes</button>
        </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.numOfCakes
    }
}

const mapDispatcToProps=(dispatch)=>{
    return{
       buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatcToProps) (Cake)