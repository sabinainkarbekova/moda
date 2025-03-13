import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h1 className="logo">{'STYLE'}</h1>
        <div className="nav-wrapper">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/account">Personal Account</Link></li>
            </ul>
          </nav>
          <Link to="/" className="subs-btn">NEXT</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;