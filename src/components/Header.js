import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div className='header'>
        <NavLink
          to='/'
          exact
          activeStyle={{ fontWeight: 'bold', color: 'red' }}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          exact
          activeStyle={{ fontWeight: 'bold', color: 'red' }}
        >
          About
        </NavLink>
        <NavLink
          to='/work'
          exact
          activeStyle={{ fontWeight: 'bold', color: 'red' }}
        >
          Work
        </NavLink>
        <NavLink
          to='/form'
          exact
          activeStyle={{ fontWeight: 'bold', color: 'red' }}
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
