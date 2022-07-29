import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {postUserData} from '../../actions/userApiCalls'
import classes from './Signup.module.css'


const Signup = () => {
  const navigate=useNavigate()

  const [userData,setUserData]=useState({
      username:"",
      password:"",
      email:"",
  })

  const handleChange=(event)=>{
    const feild = event.target.id
    const updatedData = {...userData}
    updatedData[feild] = event.target.value
    setUserData({...updatedData})
  }

  const handleLogin=async()=>{
      try{
        postUserData(userData.username,userData.email,userData.password)
            .then(res=>{
                if(res.status===200 || res.status===201){
                    localStorage.setItem('userId',res.payload.id)
                    navigate("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
      }catch(err){
          console.log(err)
      }
  }
  return (
    <div className={classes.login__container}>
        <div className={classes.login__box}>
            <h1>Signup</h1>
            <input type="text" 
            id="username"
            className={classes.text__input} 
            placeholder="Enter your username"
            onChange={(e)=>handleChange(e)}
            value={userData.username}/>

          <input type="email" 
            id="email"
            className={classes.text__input} 
            placeholder="Enter your email"
            onChange={(e)=>handleChange(e)}
            value={userData.email}/>

            <input type="password"
            id="password"
            className={classes.text__input} 
            placeholder="Enter your password"
            onChange={(e)=>handleChange(e)}
            value={userData.password}/>

            <div className={classes.row}>
                <Link to="/login" className={classes.link}>
                    <p>Login</p>
                </Link>
                <button className={classes.button} onClick={handleLogin}>
                    Signup
                </button>
            </div>
        </div>
    </div>
  )
}

export default Signup