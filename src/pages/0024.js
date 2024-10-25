import React, { useLayoutEffect, useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileHd from '../components/mobileHd';
import './0024.css';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <img src="img/errorLogo.png" alt="Loading..." />
  </div>
);

const Page0024 = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "img/scrollImg.png";
    img.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="page-0024">
      {isMobile ? <MobileHd /> : <Header />}
      <main className="scrollable-image-container">
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <img
            src="img/scrollImg.png"
            alt="Banner"
            loading="lazy"
            style={{ display: 'block' }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};


export default Page0024;
