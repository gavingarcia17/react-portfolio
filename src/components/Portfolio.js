// src/components/Portfolio.js
import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    // Add project details here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;