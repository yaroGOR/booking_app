import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Booking some </span>
            <div className="navItems">
                <button className="navButton">register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar