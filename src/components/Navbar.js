import React from 'react';
// Importing 'Link' form react-router-dom
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from './Search';

// Functional componenet that just returns JSX for a navbar.
const Navbar = () => {
    const searchBarStyle = {
        width: '50vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <div className = 'navbar' style={searchBarStyle}>
            {/* Using 'Link' instead of an achor tag keep the links within React.  */}
            <Link to = '/' className = 'links'>Home</Link>
            <Search />
        </div>
    );
};

export default Navbar;