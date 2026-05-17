import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Car from './Components/Car';
import CarList from './Components/CarList';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Container>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/add" element={<Car />} />
          <Route path="/list" element={<CarList />} />
          <Route path="/edit/:id" element={<Car />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;