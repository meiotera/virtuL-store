import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista-de-produtos" element={<ProductList />} />
          </Routes>
        </Main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
