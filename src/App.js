// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import SplashPage from './SplashPage';
import InfoPage from './InfoPage';
import './index.css'; // Ensure this imports Tailwind CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
