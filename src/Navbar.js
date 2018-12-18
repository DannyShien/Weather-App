import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className = 'navbar'>
            <Link to = '/'>Landing</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/weather'>Weather</Link>
        </div>
    );
};

export default Navbar;