import React from 'react';
import Title from '../components/Title';

const Home = () => {
  return (
    <div className='inner'>
      <Title lineContent='This is the' lineContent2='Home page' />
      <div>
        <p className='info'>
          I am a Front-end developer with a focus on creating useful and
          effective products.
        </p>
      </div>
    </div>
  );
};

export default Home;
