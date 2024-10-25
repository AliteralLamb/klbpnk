import React from 'react';
import { useLayoutEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileHd from '../components/mobileHd';
import './0024.css';

const Page0024 = () => {
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
    <div className="page-0024">
      { isMobile ? <MobileHd/> : <Header />}
      <main className="scrollable-image-container">
        <img src='${process.env.PUBLIC_URL}/img/scrollImg.png' alt="Banner" loading="lazy"/>
      </main>
      <Footer />
    </div>
  );
};

export default Page0024;
