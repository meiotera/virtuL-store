import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista-de-produtos" element={<ProductList />} />
          <Route
            path="/lista-de-produtos/:title/:id"
            element={<ProductDetail />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
