import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mobileHdStyleSheet.css';

const MobileHd = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="mobile-header">
      <div className="mobile-nav">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <div className="logo">
          <Link className="logo-link" to="/"><img src="/img/logo.png" alt="KLBPNK" className="mobile-logo" /></Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li>
            <span className="nav-item">MENU</span>
            <ul className="mobile-dropdown">
              <li><Link className="li-items" to="/soon">Speaker F**cker</Link></li>
              <li><Link className="li-items" to="/soon">0000</Link></li>
              <li><Link className="li-items" to="/soon">000X</Link></li>
              <li><Link className="li-items" to="/soon">00XX</Link></li>
              <li><Link className="li-items" to="/soon">0XXX</Link></li>
              <li><Link className="li-items" to="/soon">XXXX</Link></li>
              <li><Link className="li-items" to="/soon">LOOKBOOK</Link></li>
              <li><Link className="li-items" to="/soon">VIDEO</Link></li>
            </ul>
          </li>
          <li>
            <span className="nav-item">ARCHIVE</span>
            <ul className="mobile-dropdown">
              <li><Link className="li-items" to="/0024">0024</Link></li>
              <li><Link className="li-items" to="#0025">0025</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-item" to="/soon">SHOP</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default MobileHd;
