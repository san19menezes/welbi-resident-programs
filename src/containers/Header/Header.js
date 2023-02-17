import React from 'react';
import { NAVIGATION_LIST } from '../../utils/constants';
import logo from '../../assets/welbiLogo.png';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#00add8' : '#576372',
    };
  };
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <Link to={'/programs'}>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='app__navbar-links'>
        {NAVIGATION_LIST.map((item) => (
          <NavLink
            style={navLinkStyles}
            className='app__flex p-text'
            to={`/${item}`}
            key={item}            
          >
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
