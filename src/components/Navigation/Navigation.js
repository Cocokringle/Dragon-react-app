import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'




export default function Navigation(){
  return (
    <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
           Home
          </NavLink>

          <NavLink to="/dragons" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Dragons
          </NavLink>
    </nav>
  );
}

