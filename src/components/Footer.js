import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div class='wrapper'>
        <div class='connect'>
          <h2>Let's connect 🎉 </h2>
          <a
            href='https://docs.google.com/document/d/1h1BDwHOqo5xGDRx8aFjJmUUft8uCj0gtsEXPPeuR8kA/edit?usp=sharing'
            class='btn'
            target='_blank'
          >
            Résumé
          </a>

          <a
            href='https://www.linkedin.com/in/rongbang-bryan-ye/'
            class='btn'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>

        <div class='bottom'>
          <div class='line'></div>

          <p class='copy'>I coded this website from scratch. © 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
