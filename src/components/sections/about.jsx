import { useState } from "react";
import { RevealOnScroll } from "..";
import { GraduationCap, Briefcase } from "lucide-react";
import { courses, professionalExperiences, skillCategories } from "@/data";

export const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="about"
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
              About Me
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
          </div>

          <div className="relative group mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative rounded-2xl p-8 md:p-12 border border-white/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center font-light">
                  Passionate developer interested in{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-medium">
                    digital solutions{" "}
                  </span>
                  , exploring{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-medium">
                    emerging technologies{" "}
                  </span>
                  and working on{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-medium">
                    creative projects
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border ${category.border} hover:border-opacity-80 transition-all duration-500 hover:shadow-2xl`}
                  style={{
                    boxShadow:
                      hoveredCard === category.name
                        ? `0 25px 50px -12px hsla(${
                            categoryIndex * 90 + 210
                          }, 50%, 50%, 0.15)`
                        : undefined,
                  }}
                  onMouseEnter={() => setHoveredCard(category.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-30"
                        style={{
                          backgroundColor: `hsl(${
                            categoryIndex * 90 + 210
                          }, 60%, 60%)`,
                          left: `${15 + i * 10}%`,
                          top: `${20 + i * 8}%`,
                          animation: `float ${
                            2 + i * 0.3
                          }s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent
                          className={`w-6 h-6 text-white transition-all duration-300 ${category.hoverColor} group-hover:animate-pulse`}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {category.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`group/tag relative overflow-hidden px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 border ${category.border} ${category.textColor}`}
                          onMouseEnter={() =>
                            setHoveredSkill(`${category.name}-${techIndex}`)
                          }
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <span className="relative z-10">{tech}</span>
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/tag:opacity-10 transition-opacity duration-300`}
                          ></div>
                          {hoveredSkill === `${category.name}-${techIndex}` && (
                            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`,
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full opacity-50"></div>
                    <div className="pl-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3 leading-tight">
                          National School of Applied Sciences of Khouribga
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-2 mb-3">
                          <span className="text-sm text-nowrap px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 w-fit">
                            Engineering Degree Diploma
                          </span>
                          <span className="text-sm px-3 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 whitespace-nowrap w-fit">
                            Sep 2020 - Jun 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {courses.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-3 py-2 bg-slate-700/50 text-slate-300 rounded-xl border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
                    style={{
                      left: `${25 + i * 12}%`,
                      top: `${15 + i * 10}%`,
                      animation: `float ${2.5 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                    Professional Experiences
                  </h3>
                </div>

                <div className="space-y-8">
                  {professionalExperiences.map((experience, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${experience.sidebarColor} rounded-full opacity-50`}
                      ></div>
                      <div className="pl-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="text-lg font-semibold text-white">
                            {experience.role}
                          </h4>
                          <span
                            className={`text-sm text-nowrap px-3 py-1 ${experience.bgColor} ${experience.textColor} ${experience.badgeBorderColor} border rounded-full flex items-center gap-1`}
                          >
                            {experience.duration}
                          </span>
                        </div>
                        <p className={`${experience.textColor} font-medium`}>
                          {experience.society}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`text-xs px-3 py-2 ${experience.bgColor} ${experience.textColor} ${experience.badgeBorderColor} border rounded-xl hover:bg-slate-600/50 transition-colors`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
