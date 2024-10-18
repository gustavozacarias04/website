import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/timeline">Percurso</Link></li>
                <li><Link to="/awards">Prêmios</Link></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
