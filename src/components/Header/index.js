import React from 'react';
import { Link } from 'gatsby'
const Header = (props) => (
    <header>
        <h1>JC</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;