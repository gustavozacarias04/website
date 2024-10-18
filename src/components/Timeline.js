import React from 'react';

const timelineEvents = [
    { date: '2021', event: 'Início da faculdade de Ciência da Computação' },
    { date: '2022', event: 'Estágio em Desenvolvimento Web' },
];

function Timeline() {
    return (
        <section id="timeline">
            <h2>Percurso Acadêmico/Profissional</h2>
            <ul>
                {timelineEvents.map((item, index) => (
                    <li key={index}>
                        <p>{item.date} - {item.event}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Timeline;

