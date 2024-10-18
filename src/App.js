import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Timeline />
            <Awards />
            <Footer />
        </div>
    );
}

export default App;