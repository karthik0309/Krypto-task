import React, { useState,useEffect } from 'react'
import {useGlobalState} from '../../globalstate/user/index'
import {getProductById} from '../../actions/productApiCalls'
import{CLOUDINARY} from '../../backend'
import classes from './CartView.module.css'

const CartView = ({details}) => {

    const {state,dispatch} = useGlobalState()
    const [quantity,setQuantity] = useState(1)
    const [product,setProduct] = useState({
        id:"",
        name:"",
        image:"",
        price:"",
        message:"",
        rating:""
    }) 

    const handleIncrement=()=>{
        setQuantity(quantity+1)
        dispatch({type:"SETQTY",price:details.price})
    }

    const handleDecrement=()=>{
        setQuantity(quantity-1)
        dispatch({type:"SETQTY",price:-details.price})
    }

    const removeProduct=()=>{
        dispatch({type:"REMOVE_PRODUCT",id:details.id,price:quantity*details.price})
    }

    const fetchProduct=(id,access)=>{
        try{
          getProductById(id,access)
          .then((res)=>{
              setProduct({...res})
          })
          .catch((err)=>{
              console.log(err)
          })
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchProduct(details.id,state.access)
    },[])

    return (
    <div className={classes.cart__container}>
        <img src={`${CLOUDINARY+product.image}`} alt="" className={classes.img}/>
        <div className={classes.info}>
            <p className={classes.title}>{product.name}</p>
            <p className={classes.price}>&#8377;{product.price}</p>
            <span className={classes.quantity}>
                <div onClick={handleIncrement} className={classes.inc}>+</div>
                <input type="text" className={classes.input} value={quantity} readOnly= {true}/>
                <div onClick={handleDecrement} className={classes.inc}>-</div>
            </span>
        </div>
        <div className={classes.cancel}>
            <span>
                <button className={classes.button} onClick={removeProduct}>+</button>
            </span>
        </div>
    </div>
  )
}

export default CartView