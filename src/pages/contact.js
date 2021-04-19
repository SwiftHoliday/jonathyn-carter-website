import React from 'react';
import { Link } from 'gatsby';

const Contact = (props) => (
    <div>
        <h1>Contact Me</h1>
        <address>
            <p>Email Me: <a href="mailto:jonathyncarter@gmail.com">jonathyncarter@gmail.com</a>
            </p>
        </address>
        <Link to="/about">Learn More</Link>
    </div>
);

export default Contact;