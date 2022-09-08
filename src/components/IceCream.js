import React from 'react'
import { connect } from 'react-redux'
import buyIceCream from '../redux/IceCream/IceCreamActions'


 
  
function IceCream (props) {
    console.log(props)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                <div className='card bg-success m-3'>
                <div className='card-header'>
                    <h1 className='text-warning' >Updating State using Connect Functions</h1>
                  </div>
    
            <h1 className='card-title '>IceCreams:{props.iceCreamCount}</h1>
            <button className='btn btn-primary' onClick={props.buyIceCream}>Buy IceCreams</button>
            </div>
                </div>
            </div>
        </div>
        
      )
  
       
}

   const mapStateToProps=(state)=>{
        return{
            iceCreamCount:state.iceCream.numOfIceCreams
        }
       
    }

    const mapDispatchToProps=(dispatch)=>{
        return{
            buyIceCream:()=>dispatch(buyIceCream())
        }
    }

 
    export default connect(mapStateToProps,mapDispatchToProps) (IceCream)
