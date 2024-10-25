import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const updateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');  
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(2, '0').slice(0, 2);

    const formattedTime = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, []);

  const toggleArchiveDropdown = () => setIsArchiveOpen(!isArchiveOpen);
  const toggleMenuDropdown = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <span className="nav-item" onClick={toggleMenuDropdown}>MENU</span>
            {isMenuOpen && (
              <ul className="dropdown menu-dropdown">
                <li><Link className="li-items" to="/soon">Speaker F**cker</Link></li>
                <li><Link className="li-items" to="/soon">0000</Link></li>
                <li><Link className="li-items" to="/soon">000X</Link></li>
                <li><Link className="li-items" to="/soon">00XX</Link></li>
                <li><Link className="li-items" to="/soon">0XXX</Link></li>
                <li><Link className="li-items" to="/soon">XXXX</Link></li>
                <li><Link className="li-items" to="/soon">LOOKBOOK</Link></li>
                <li><Link className="li-items" to="/soon">VIDEO</Link></li>
              </ul>
            )}
          </li>
          <li>
            <span className="nav-item" onClick={toggleArchiveDropdown}>ARCHIVE</span>
            {isArchiveOpen && (
              <ul className="dropdown archive-dropdown">
                <li><Link className="li-items" to="/0024">0024</Link></li>
                <li><Link className="li-items" to="/0025">0025</Link></li>
              </ul>
            )}
          </li>
          <li><Link className="nav-item" to="/soon">SHOP</Link></li>
          <li className="logo">
            <Link className="logo-link" to="/"><img src="/img/logo.png" alt="KLBPNK" className="logo-imageh"/></Link>
          </li>
        </ul>
        <div className="date-time">{currentTime}</div>
      </nav>
    </header>
  );
};

export default Header;
