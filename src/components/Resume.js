// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;