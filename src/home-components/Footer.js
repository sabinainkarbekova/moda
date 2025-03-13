import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h1 className="logo">{'STYLE'}</h1>
                    <nav className='footer-nav'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/account">Personal Account</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <p>STYLE 118 2561 Fintown</p>
                    <p>support@style.com | 020 7993 2905</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;