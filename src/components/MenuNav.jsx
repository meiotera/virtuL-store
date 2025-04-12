import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/MenuNav.module.css';

const MenuNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/lista-de-produtos"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Todos os produtos
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Sacola
      </NavLink>
    </nav>
  );
};

export default MenuNav;
