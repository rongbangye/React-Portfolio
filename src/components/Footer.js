import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='connect'>
          <h2>Let's connect 🎉 </h2>
          <a
            href='https://docs.google.com/document/d/1h1BDwHOqo5xGDRx8aFjJmUUft8uCj0gtsEXPPeuR8kA/edit?usp=sharing'
            className='btn'
            target='_blank'
          >
            Résumé
          </a>

          <a
            href='https://www.linkedin.com/in/rongbang-bryan-ye/'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>

        <div className='bottom'>
          <div className='line'></div>

          <p className='copy'>I coded this website from scratch. © 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
