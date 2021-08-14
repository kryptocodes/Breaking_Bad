import React from 'react'
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
         
           
            <span className="navbar-brand  mx-auto d-block">
            <Link to="/">
            <img src={logo} width="40%" className="img-fluid  mx-auto d-block "/>
            </Link>
            </span>
           
        </div>
    )
}









export default NavBar