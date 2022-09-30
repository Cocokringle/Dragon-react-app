import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <nav>
      {isLoggedIn ? 
          <NavLink to="/dragons" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Dragons
          </NavLink> :
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
           Home
          </NavLink>}
    </nav>
  );
}

