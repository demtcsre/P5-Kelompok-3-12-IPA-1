import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AlternativeProducts from './components/AlternativeProducts';
import EducationalContent from './components/EducationalContent';
import LocalSupport from './components/LocalSupport';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/alternative-products" element={<AlternativeProducts />} />
          <Route path="/educational-content" element={<EducationalContent />} />
          <Route path="/local-support" element={<LocalSupport />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;