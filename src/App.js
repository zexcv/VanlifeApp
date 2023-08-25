import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './components/About';
import Home from './components/Home';



function App() {
  return (
  <div className='App'>
    <BrowserRouter>
        <header>
          <Link to="/">#VANLIFE</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
