import React from 'react';
import logo from "../../logo.png";
import {Link} from 'react-router-dom';
import {ImSearch} from "react-icons/im";
const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt='logo'/>
        <div>
            <Link to="/">Popular</Link>
            <Link to="/">Top Rated</Link>
            <Link to="/">Now Playing</Link>
            <Link to="/">Up Coming</Link>

        </div>
        <ImSearch />
    </nav>
  )
}

export default Header