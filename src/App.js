import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Footer from './components/Footer';
import './style.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/awards" element={<Awards />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;