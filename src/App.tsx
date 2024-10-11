import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail'; 
import './App.css';
import 'animate.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/body/:id" element={<Detail />} /> 
    </Routes>
  </Router>
);

export default App;