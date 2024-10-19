import React from 'react';

function Home() {
    return (
        <section
            id="home"
            className="bg-neutral-900 text-white min-h-screen flex flex-col justify-center items-center"
            style={{ paddingTop: '4rem' }}
        >
            {/* Apresentação com nome e descrição */}
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Olá, eu sou Gustavo Zacarias</h1>
                <p className="text-xl mb-6">
                    Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis.
                    Tenho experiência em React, JavaScript e tecnologias modernas de front-end.
                </p>

                <a
                    href="#contact"
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                >
                    Entre em contato comigo
                </a>
            </div>
        </section>
    );
}

export default Home;
