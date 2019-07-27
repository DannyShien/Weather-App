import React from 'react';
// Importing 'Link' form react-router-dom
import { Link } from 'react-router-dom';
import './Navbar.css';

// Functional componenet that just returns JSX for a navbar.
const Navbar = () => {
    return (
        <div className = 'navbar sticky'>
            {/* Using 'Link' instead of an achor tag keep the links within React.  */}
            <Link to = '/' className = 'links'>Home</Link>
        </div>
    );
};

export default Navbar;