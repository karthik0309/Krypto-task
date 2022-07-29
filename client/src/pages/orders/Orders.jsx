import React,{useState} from 'react'
import CartView from '../../components/cart/CartView'
import Modal from '../../components/modal/Modal'
import {postOrderData} from '../../actions/orderApiCalls'
import {useGlobalState} from '../../globalstate/user/index'
import classes from './Orders.module.css'


const Orders = () => {
  const {state,dispatch}  = useGlobalState()
  const [showModal,setShowModal]=useState(false)

  const handleOrder=()=>{
      try{
        postOrderData(state.username,state.total,state.cart,state.access)
        .then(()=>{
            dispatch({type:"EMPTY_CART"})
            setShowModal(true)            
        })
        .cathc((err)=>{
            console.log(err)
        })
      }catch(err){
          console.log(err)
      }
  }

  console.log(state)
  return (
    <div className={classes.main}>
        {showModal && <Modal/>}
        <div className={classes.order__container}>
        <div className={classes.cart__details}>
            <h2>My Cart</h2>
            <div>
                {state.cart.length>0 &&
                state.cart.map((prod,index)=>(
                    <CartView key={index} details={prod}/>
                ))}
            </div>
        </div>      
        <div className={classes.billing__details}>
            <p className={classes.price__title}>Price Details</p>
            <span className={classes.price}>
                <div>
                    price
                </div>
                <div>
                    {state.total}
                </div>
            </span>
            <span className={classes.price}>
                <div>
                    Discount price
                </div>
                <div>
                    100
                </div>
            </span>
            <span className={classes.price}>
                <div>
                    Delivery price
                </div>
                <div>
                   50 
                </div>
            </span>
            <div className={classes.line}></div>
            <span className={classes.price}>
                <div>
                    <b>Total price</b>
                </div>
                <div>
                   <b>{state.total+50}</b>
                </div>
            </span>
        </div>
        </div>
        <button className={classes.order} onClick={handleOrder}>
            Order now
        </button>
    </div>
  )
}

export default Orders