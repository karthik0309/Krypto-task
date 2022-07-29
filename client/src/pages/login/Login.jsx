import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {userLogin} from '../../actions/userApiCalls'
import { useGlobalState } from '../../globalstate/user'
import classes from './Login.module.css'


const Login = () => {
  const navigate=useNavigate()
  const { dispatch } = useGlobalState();

  const [userData,setUserData]=useState({
      username:"",
      password:"",
  })

  const handleChange=(event)=>{
    const feild = event.target.id
    const updatedData = {...userData}
    updatedData[feild] = event.target.value
    setUserData({...updatedData})
  }

  const handleLogin=async()=>{
      try{
        userLogin(userData.username,userData.password)
            .then(res=>{
                if(res.status===200 || res.status===201){
                    dispatch({type: "SETDATA",
                        id:res.payload.id,
                        email:res.payload.email,
                        username:res.payload.username,
                        access:res.access
                    })
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
            <h1>Login</h1>
            <input type="text" 
            id="username"
            className={classes.text__input} 
            placeholder="Enter your username"
            onChange={(e)=>handleChange(e)}
            value={userData.username}/>

            <input type="password"
            id="password"
            className={classes.text__input} 
            placeholder="Enter your password"
            onChange={(e)=>handleChange(e)}
            value={userData.password}/>

            <div className={classes.row}>
                <Link to="/signup" className={classes.link}>
                    <p>New User?</p>
                </Link>
                <button className={classes.button} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login