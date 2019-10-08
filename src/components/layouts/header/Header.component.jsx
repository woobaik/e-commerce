import React from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
  return (
    <nav className='Header'>
      <Link to='/' className='header-logo'>
        <FontAwesomeIcon icon={faGem} /> HYPE SHOP
      </Link>
      <div className='header-navigations'>
        <Link to='/shop' className='header-navigation'>
          SHOP
        </Link>
        <Link to='/about' className='header-navigation'>
          ABOUT
        </Link>
        <Link to='/user' className='header-navigation'>
          SIGN IN
        </Link>
      </div>
    </nav>
  )
}

export default Header
