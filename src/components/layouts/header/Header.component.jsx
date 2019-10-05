import React from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"

const Header = () => {
  return (
    <nav className='Header'>
      <Link to='/' className='header-logo'>
        HYPE SHOP
      </Link>
      <div className='header-navigations'>
        <Link to='/shop' className='header-navigation'>
          SHOP
        </Link>
        <Link to='/shop' className='header-navigation'>
          ABOUT
        </Link>
        <Link to='/shop' className='header-navigation'>
          SIGN IN
        </Link>
      </div>
    </nav>
  )
}

export default Header
