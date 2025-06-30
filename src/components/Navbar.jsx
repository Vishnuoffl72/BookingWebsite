import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="logo-class">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
        </div>
        <div className="pages-class">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/theaters">Theaters</Link>
          <Link to="/releases">Releases</Link>
        </div>
        <div className="buttons-class">
          <button><ion-icon name="search-outline" style={{ fontSize: '20px' }}></ion-icon></button>
          <button className='login-button'>Log In</button>
        </div>
      </div>
    </>
  );
}

export default Navbar