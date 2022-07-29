import React,{useEffect,useState} from 'react'
import {useSearchParams, useNavigate} from 'react-router-dom'
import {useGlobalState} from '../../globalstate/user/index'
import {CLOUDINARY} from '../../backend'
import {getProductById} from '../../actions/productApiCalls'
import classes from './ProductView.module.css'

const ProductView = () => {
  const navigate = useNavigate()
  const {state,dispatch} = useGlobalState()
  const [searchParams, setSearchParams] = useSearchParams();
  const [product,setProduct] = useState({
      id:"",
      name:"",
      image:"",
      price:"",
      message:"",
      rating:""
  }) 

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
    console.log(state.access)
    fetchProduct(searchParams.get("id"),state.access)
  },[])

  const handleAddToCart=()=>{
      dispatch({type:"ADDTOCART",product:{count:1,price:product.price,id:product.id}})
      navigate("/orders")
  }

  return (
    <div className={classes.product__container}>
        <div className={classes.img}>
            <img src={`${CLOUDINARY+product.image}`} alt="" />
        </div>
        <div className={classes.info}>
            <span>
                <span className={classes.title}>
                    <p className={classes.name}>{product.name}</p>
                    <p>fav</p>
                </span>
                <p>{product.message}</p>
                <p>{product.price}</p>
            </span>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductView