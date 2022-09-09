import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import buyIceCream from '../redux/IceCream/IceCreamActions'

function ItemContainer(props) {
 
  return (
    <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                <div className='card bg-success m-3'>
                <div className='card-header'>
                    <h1 className='text-warning' >Updating State using Connect Functions wit Own Props</h1>
                  </div>
    
            <h1 className='card-title '>{props.item}</h1>
            <button className='btn btn-primary' onClick={props.buy}>Buy </button>
            </div>
                </div>
            </div>
        </div>
        
    
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const buyFun=ownProps.cake?()=>dispatch(buyCake()):dispatch(buyIceCream())
    return{
        buy:buyFun
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)