import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartContext } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <Aspp />
    </CartContext>
  </StrictMode>,
);
