import React from 'react'
import {useNavigate} from 'react-router-dom'
import {CLOUDINARY} from '../../backend'
import classes from './ItemCard.module.css'

const ItemCard = ({details}) => {

  const navigate=useNavigate()

  const handleCardClick=()=>{
    navigate(`/products/?id=${details.id}`)
  }

  return (
    <div className={classes.item__card} onClick={handleCardClick}>
        <img src={`${CLOUDINARY+details.image}`} alt="image" className={classes.img}/>
        <div className={classes.product__info}>
            <li>{details.name}</li>
            <li>&#8377;{details.price}</li>
            <li className={classes.rating} style={{color:"white"}}>
                {details.rating}.0
            </li>
        </div>
        <div className={classes.buttons}>
            <p>fav</p>
            <p>cart</p>
        </div>
    </div>
  )
}

export default ItemCard