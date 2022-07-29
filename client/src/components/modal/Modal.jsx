import React,{useState} from 'react'
import Success from '../../assets/successfull.png'
import classes from './Modal.module.css'

const Modal = () => {
  const [clicked,setClicked]=useState(true)

  const handleClick=()=>{
    setClicked(!clicked)
  }

  return (
    <>
        {clicked && 
            <div className={classes.backdrop} onClick={handleClick}>
                <div className={classes.card}>
                    <img src={Success} alt="" className={classes.img}/>
                    <h2>Ordered Successfully</h2>
                </div>
            </div>
        }
    </>
  )
}

export default Modal