import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <NavLink
          to='/about'
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'Gold',
            textDecorationLine: 'line-through',
          }}
        >
          About
        </NavLink>
        <NavLink
          to='/work'
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'Gold',
            textDecorationLine: 'line-through',
          }}
        >
          Work
        </NavLink>
        <NavLink
          to='/form'
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'Gold',
            textDecorationLine: 'line-through',
          }}
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
