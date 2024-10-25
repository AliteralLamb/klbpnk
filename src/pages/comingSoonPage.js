import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './comingSoonPage.css';
import Footer from '../components/footer';

const ComingSoonPage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [email, setEmail] = useState(''); // State to hold the email input
  const [submitted, setSubmitted] = useState(false); // State to track submission status

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update the email state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // If using Formspree, do not forget to send data via a POST request
    fetch('https://formspree.io/f/manynkpe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Send the email to Formspree
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true); // Update submission status to true
        setEmail(''); // Clear the email input field after submission
      }
    })
    .catch(error => {
      console.error('Error submitting email:', error);
      // Handle the error if necessary, but no alerts as per your request
    });
  };

  return (
    <div className="landing-page coming-soon-page">
      <Link className="logo-link" to="/"><img src='img/logo.png' className='logo-image' alt='KLBPNK' /></Link>
      <div className="content-wrapper">
        <p className="current-time">{currentTime}</p>
        <form onSubmit={handleSubmit} className="email-form">
          <input 
            type="email" 
            value={email} // Bind the value of the input to the email state
            onChange={handleEmailChange} 
            placeholder="Insert email..." 
            required 
            className="email-input" 
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && <p className="thank-you-message">submitted</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
