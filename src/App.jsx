import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import './App.css';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<LoginPage />} /> 
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/pizza" element={<Pizza />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </>
    );
}

export default App;
