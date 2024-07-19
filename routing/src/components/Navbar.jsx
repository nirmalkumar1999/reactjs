import React from 'react'
import "../css/Navbar.css"
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={"/"} className='link'>Home</Link>
        <NavLink to={"/About"} className='link'>About</NavLink>
        <Link to={"/Product"} className='link'>Product</Link>
        <NavLink to={"/Contact"} className='link'>Contact</NavLink>
        <NavLink to={"/Login"} className='link'>Login</NavLink>
    </div>
  )
}

export default Navbar