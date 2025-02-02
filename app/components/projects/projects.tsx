import { type FC } from "react";
import "./projects.css"; // Import the CSS file for Projects
import { projects } from "@/data";

const Projects: FC = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Projects <span>&</span> Internships
          </h1>
        </div>
        <div className="all-projects">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-info">
                <h1>{project.title}</h1>
                <h3>{project.technologies.join(", ")}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
