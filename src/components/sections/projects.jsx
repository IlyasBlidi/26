import { useState } from "react";
import { ProjectCard, RevealOnScroll } from "..";
import { projects } from "@/data";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-dvh flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
