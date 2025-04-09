import { BrowserRouter, Link, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Routes>
            <Link to={'/'} element={<Home />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
