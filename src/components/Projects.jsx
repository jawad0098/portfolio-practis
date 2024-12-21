import React from 'react';
import projects from './data/projects.json';

const Projects = () => {
  return (
    <div className="container projects" id="projects">
      <h1 data-aos="fade-up" data-aos-duration="1000">PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((data) => (
          <div key={data.id} className="project-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="img-container">
              <img src={data.imageSrc} alt={data.title} />
            </div>
            <div className="card-content">
              <h5>{data.title}</h5>
              <p>{data.description}</p>
              <div className="buttons">
                <a href={data.demo} className="btn btn-primary">Website</a>
                <a href={data.source} className="btn btn-warning">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
