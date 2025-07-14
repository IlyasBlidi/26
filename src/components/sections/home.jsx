import { HashLink } from "react-router-hash-link";
import { RevealOnScroll } from "..";
import { ripple } from "@/utils";
import { ArrowRight, CodeXml, MessageCircleMore } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-dvh flex items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              backgroundColor: `hsl(${i * 90 + 210}, 60%, 60%)`,
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
              animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 border border-blue-400/30 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-8 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse delay-2000"></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 relative w-full max-w-4xl mx-auto space-y-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>

          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight bg-300% animate-gradient">
              Hi, I'm Ilyas Blidi
            </h1>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex justify-center">
                  <div className="group relative">
                    <div className="flex items-center gap-3 text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/20 hover:border-green-400/50">
                      <CodeXml className="w-6 h-6 transition-transform" />
                      <span className="font-medium text-lg sm:text-xl">
                        Full-Stack Developer
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all duration-300"></div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="group relative">
                    <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/20 hover:border-green-400/50">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-300 font-medium text-lg sm:text-xl">
                        Available for work
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-green-500/5 rounded-full blur-xl group-hover:bg-green-500/10 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
              <HashLink
                to="/#projects"
                onMouseDown={(e) => ripple.create(e, "dark")}
                className="group flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 sm:py-4 sm:px-8 rounded-full font-medium text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-blue-500/25"
                smooth
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </HashLink>

              <HashLink
                to="/#contact"
                onMouseDown={(e) => ripple.create(e, "light")}
                className="group flex items-center justify-center border-2 border-blue-500/50 text-blue-400 py-3 px-4 sm:py-4 sm:px-8 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm"
                smooth
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <MessageCircleMore className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </HashLink>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
