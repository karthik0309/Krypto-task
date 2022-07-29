import React,{lazy,Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import StateProvider from "./globalstate/user/index";

const Home = lazy(()=>import('./pages/home/Home'))
const Login = lazy(()=>import('./pages/login/Login'))
const Signup = lazy(()=>import('./pages/signup/Signup'))
const ProductView = lazy(()=>import('./pages/productView/ProductView'))
const Orders = lazy(()=>import('./pages/orders/Orders'))


const Router = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
            <StateProvider>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products"  element={<ProductView/>}/>
                  <Route path="/login"  element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/orders" element={<Orders/>} />
                  <Route path="/favourites" />
              </Routes>
            </StateProvider>
        </Suspense>
    </BrowserRouter>
  )
}

export default Router