import { BrowserRouter, Link, Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
