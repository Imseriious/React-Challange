import React from 'react';
import classes from './NavBar.module.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={classes.Nav}>
            <h2><Link to="/">Elanza</Link></h2>
        </div>
    )
}

export default NavBar;