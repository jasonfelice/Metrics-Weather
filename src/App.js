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
import Cities from './pages/Cities';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>
);

export default App;
