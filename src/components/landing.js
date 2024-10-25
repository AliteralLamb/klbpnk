import React, { useEffect, useState, useCallback } from 'react';
import './landingPage.css';
import Footer from "./footer";

const LandingPage = ({ onEnter }) => {
  const [isFading, setIsFading] = useState(false);
  
  const handleEnter = useCallback(() => {
    setIsFading(true);
    setTimeout(onEnter, 500);
  }, [onEnter]);
  
  const handleClick = useCallback(() => {
    handleEnter();
  }, [handleEnter]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleEnter]);

  return (
    <div className={`landing-page ${isFading ? 'fade-out' : ''}`} onClick={handleClick}>
      <img src="${process.env.PUBLIC_URL}/img/logo.png" alt="KLBPNK" className="logo-image"/>
      <div className="content-wrapper">
        <div className="landing-text">
          <p>__Klbpnk__+_*2025_all_rights_reserved__+_</p>
          <p>__Speaker_F**cker_*More_TBC__</p>
          <p>Website__+__[Enter]</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
