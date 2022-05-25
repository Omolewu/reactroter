
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>

        </div>
    )
}

export default NavBar