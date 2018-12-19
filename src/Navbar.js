import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className = 'navbar'>
            <Link to = '/' className = 'links'>Home</Link>
            <Link to = '/about' className = 'links'>About</Link>
            <Link to = '/weather' className = 'links'>Weather</Link>
        </div>
    );
};

export default Navbar;