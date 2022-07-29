import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar__container}>
        <h1 className={classes.logo}>ShopKart.</h1>
        <ul className={classes.nav__items}>
            <Link to="/products" className={classes.link}>
                <li className={classes.nav__item}>
                        Products
                </li>
            </Link>
            <Link to="/login" className={classes.link}>
                <li className={classes.nav__item}>
                        Login
                </li>
            </Link>
            <Link to="/orders" className={classes.link}>
                <li className={classes.nav__item}>
                        cart
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar