import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Details from './pages/Details';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>
);

export default App;
