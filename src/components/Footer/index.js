import React from 'react';

const Footer = (props) => (
    <footer>
        <p>
            Copyright &copy; All Rights Reserved
             {' '}{new Date().getFullYear()} Jonathyn Carter
        </p>
    </footer>
);

export default Footer;