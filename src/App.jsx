import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import WelcomeScreen from './components/WelcomeScreen';
import SignUp from './components/SignUp'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


