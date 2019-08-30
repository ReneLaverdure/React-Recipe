import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Ambrosia</h1>

      <ul className={classes.navlist}>
        <li>Saved Recipes</li>
      </ul>

    </nav>
  )
}

export default Navbar;