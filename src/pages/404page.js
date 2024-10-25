import React, { useLayoutEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileHd from '../components/mobileHd';
import './404page.css';

const Page404 = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 768);

  useLayoutEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    const debounceResize = debounce(handleResize, 100);

    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  return (
    <div className="page-404">
      {isMobile ? <MobileHd /> : <Header />}
      <div className="content">
        <img src='img/errorLogo.png' className='errorLogo' alt="Error Logo" />
        <p>Error 404</p>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
