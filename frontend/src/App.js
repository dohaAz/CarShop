import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Car from './Components/Car';
import CarList from './Components/CarList';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/add" element={<Car />} />
          <Route path="/list" element={<CarList />} />
          <Route path="/edit/:id" element={<Car />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;