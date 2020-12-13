import React from 'react';
import Title from '../components/Title';
import pic from '../assets/img/me.JPG';

const About = () => {
  return (
    <div className='inner'>
      <Title lineContent='Hello 👋' lineContent2='FullStack developer ' />
      <div className='inner-info'>
        <img className='pic' src={pic} alt='pic' />
        <p className='info'>
          Hi, my name is Rongbang Bryan Ye, a frontend developer based in San
          Jose, California 🌄 . I have a passion for creating user experiences
          that are meaningful, and impactful. Understanding the human experience
          is essential for creating useful and effective products.
        </p>
      </div>
    </div>
  );
};

export default About;
