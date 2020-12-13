import React from 'react';
import Title from '../components/Title';
import connectedIn from '../assets/img/jobedIn.png';
import netflix from '../assets/img/netflix-react.png';
import nba from '../assets/img/nba-web.png';
import hero from '../assets/img/hero-page.png';
import covid19 from '../assets/img/covid19-tracker.png';
const Work = () => {
  return (
    <div className='work-inner'>
      <Title lineContent='This is the' lineContent2='Work page' />
      <div className='work-inner-info'>
        <a
          href='http://fathomless-stream-49781.herokuapp.com/login'
          target='_blank'
          rel='noreferrer'
          class='case-study'
          className='work-container'
        >
          <div class='work-desc'>
            <h2>ConnectedIn</h2>
            <h3>Full-Stack Application</h3>
          </div>
          <div className='img-container'>
            <img src={connectedIn} alt='' />
          </div>
        </a>

        <a
          href='https://netflix-clone-6094d.web.app/'
          target='_blank'
          rel='noreferrer'
          class='case-study'
          className='work-container'
        >
          <div class='work-desc'>
            <h2>Netflix Clone</h2>
            <h3>Movies Website</h3>
          </div>
          <div className='img-container'>
            <img src={netflix} alt='' />
          </div>
        </a>

        <a
          href='https://hardcore-bhaskara-c04d2a.netlify.app/'
          target='_blank'
          rel='noreferrer'
          class='case-study'
          className='work-container'
        >
          <div class='work-desc'>
            <h2>Hero Template</h2>
            <h3>Animation website</h3>
          </div>
          <div className='img-container'>
            <img src={hero} alt='' />
          </div>
        </a>

        <a
          href='https://github.com/rongbangye/nba-web'
          target='_blank'
          rel='noreferrer'
          class='case-study'
          className='work-container'
        >
          <div class='work-desc'>
            <h2>Nba Visualizer</h2>
            <h3>data app</h3>
          </div>
          <div className='img-container'>
            <img src={nba} alt='' />
          </div>
        </a>

        <a
          href='https://rongbangye.github.io/Covid-19-Tracker/'
          target='_blank'
          rel='noreferrer'
          class='case-study'
          className='work-container'
        >
          <div class='work-desc'>
            <h2>Covid-19 Tracker</h2>
            <h3>Website</h3>
          </div>
          <div className='img-container'>
            <img src={covid19} alt='' />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Work;
