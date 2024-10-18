import React from 'react';

const awards = [
    { title: 'Certificado de React.js', year: '2023' },
    { title: 'Prêmio de Melhor Projeto de Estágio', year: '2022' }
];

function Awards() {
    return (
        <section id="awards">
            <h2>Prêmios e Certificados</h2>
            <ul>
                {awards.map((award, index) => (
                    <li key={index}>
                        <p>{award.year} - {award.title}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Awards;