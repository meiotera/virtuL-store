import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
