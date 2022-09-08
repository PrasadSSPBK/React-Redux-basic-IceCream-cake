import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'


function Cake(props) {
    console.log(props)
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <div className='card bg-success m-3'>
            <div className='card-header'>
                    <h1 className='text-warning' >Updating State using Connect Functions</h1>
                  </div>

        <h1 className='card-title r'>Cakes:{props.numOfCakes}</h1>
        <button className='btn btn-primary' onClick={props.buyCake}>Buy Cakes</button>
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
       buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatcToProps) (Cake)