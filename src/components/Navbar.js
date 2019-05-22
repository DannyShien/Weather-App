import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className = 'navbar sticky'>
            <Link to = '/' className = 'links'>Home</Link>
            <Link to = '/weather' className = 'links'>Weather</Link>
        </div>
    );
};

export default Navbar;