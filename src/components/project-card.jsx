import { FloatingParticles } from ".";

export const ProjectCard = ({ project, setHoveredProject }) => {
  const {
    id,
    title,
    description,
    technologies,
    featured,
    gradientFrom,
    gradientTo,
    border,
    hoverBorder,
    hoverShadow,
    bgGradient,
    tagBorder,
    tagText,
    tagBg,
    tagHoverGradient,
    particleColor,
  } = project;

  const colSpan = featured ? "md:col-span-2" : "";
  const padding = featured ? "p-8" : "p-6";
  const titleSize = featured ? "text-2xl" : "text-xl";
  const particleCount = featured ? 8 : 6;

  return (
    <div
      className={`${colSpan} group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border ${border} ${hoverBorder} transition-all duration-500 hover:shadow-2xl ${hoverShadow}`}
      onMouseEnter={() => setHoveredProject(id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      <FloatingParticles particleColor={particleColor} count={particleCount} />

      <div className={`relative z-10 ${padding}`}>
        <div className="relative z-10 space-y-4">
          <h3
            className={`${titleSize} font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
          >
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, key) => (
              <span
                key={key}
                className={`group/tag relative overflow-hidden px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${tagBorder} ${tagText} ${tagBg}`}
              >
                <span className="relative z-10">{tech}</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tagHoverGradient} opacity-0 group-hover/tag:opacity-10 transition-opacity duration-300`}
                ></div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
