import React from 'react';
import logo from "../../logo.png";
import {Link} from 'react-router-dom';
import {ImSearch} from "react-icons/im";
const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt='logo'/>
        <div>
            <Link to="/tvshows">Popular</Link>
            <Link to="/tvshows">Top Rated</Link>
            <Link to="/tvshows">Now Playing</Link>
            <Link to="/tvshows">Up Coming</Link>

        </div>
        <ImSearch />
    </nav>
  )
}

export default Header