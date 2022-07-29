import React,{useEffect} from 'react'
import {getAllProducts} from '../../actions/productApiCalls'
import ItemCard from '../../components/itemCard/ItemCard'
import {useGlobalState} from '../../globalstate/user/index'
import classes from './Home.module.css'

const Home = () => {
  const {state} = useGlobalState();
  const { dispatch } = useGlobalState();

  const fetchProducts=()=>{
    try{
      getAllProducts(state.access)
      .then((res)=>{
        dispatch(
          {type:"SETPRODUCTS",
          products:res})
      })
      .catch(err=>{
        console.log(err)
      })
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  
  return (
    <div className={classes.home__container}>
      <div className={classes.dummy}></div>
      <div className={classes.products__list}>
        {state.products.length>0 && 
        state.products.map((product,index)=>(
          <ItemCard details={product} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Home