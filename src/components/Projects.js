import React from 'react';

const projects = [
    {
        name: "Projeto 1",
        description: "Descrição do projeto 1",
        techStack: "React, Node.js",
        link: "https://github.com/user/projeto1"
    },
    {
        name: "Projeto 2",
        description: "Descrição do projeto 2",
        techStack: "HTML, CSS, JavaScript",
        link: "https://github.com/user/projeto2"
    }
];

function Projects() {
    return (
        <section id="projects">
            <h2>Meus Projetos</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tecnologias:</strong> {project.techStack}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
