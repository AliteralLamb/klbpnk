import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./router.css";

import Home from './pages/home';
import Page0024 from './pages/0024';
import Page0025 from './pages/0025';
import LandingPage from './components/landing';
import ErrorPage from './pages/404page';
import ComingSoonPage from './pages/comingSoonPage';

const AppRouter = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={hasEntered ? <Home /> : <LandingPage onEnter={handleEnter} />} />
          <Route path="/0024" element={<Page0024 />} />
          <Route path="/0025" element={<Page0025 />} />
          <Route path='/soon' element={<ComingSoonPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
