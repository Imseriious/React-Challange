import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.Nav}>
            <h2>Elanza</h2>
            <button>Return</button>
        </div>
    )
}

export default NavBar;