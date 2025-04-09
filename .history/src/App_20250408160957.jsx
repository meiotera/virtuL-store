import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista-de-produtos" element={<ProductList />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
