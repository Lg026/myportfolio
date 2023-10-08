import React from 'react'
import { NavLink } from 'react-router-dom'
import navStyles from '../styles/nav.module.css'

export const Navbar = () => {
  return (
    <header>
        <nav className={navStyles.nav}>
            <ul className={navStyles.links}>
                <li><NavLink className={navStyles.a} to='/my-portfolio/'>Home</NavLink></li>
                <li><NavLink className={navStyles.a} to='/projects'>Projects</NavLink></li>
                <li><NavLink className={navStyles.a} to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
