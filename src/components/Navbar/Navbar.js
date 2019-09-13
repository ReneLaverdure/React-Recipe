import React from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {

  const LinkStyle = {
    textDecoration: 'none',
    color: 'white'
  }

  return (
    <nav className={classes.navbar}>
      <Link style={LinkStyle} to='/home'>
        <h1>Ambrosia</h1>
      </Link>
     

      <ul className={classes.navlist}>
        <Link style={LinkStyle} to="/savedrecipes">
          <li>Saved Recipes</li>
        </Link>
        
      </ul>

    </nav>
  )
}

export default Navbar;