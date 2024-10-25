import React from 'react';
import { useLayoutEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileHd from '../components/mobileHd';
import './home.css';

const Home = () => {
  
  const [isMobile, setMobile] = useState(window.innerWidth < 768);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-page">
    { isMobile ? <MobileHd/> : <Header />}
      <main className="banner">
        <img src='/img/cables.png' alt="Homepage Banner" loading="lazy" />
      </main>
      <Footer /> 
    </div>
  );
};

export default Home;
