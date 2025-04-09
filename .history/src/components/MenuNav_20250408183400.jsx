import React from 'react';
import { Link } from 'react-router-dom';

const MenuNav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/lista-de-produtos">Todos os produtos</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
};
export default MenuNav;
