import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [nameVisible, setNameVisible] = useState(false);
  const [phase, setPhase] = useState(0); // 0: typing, 1: name reveal, 2: complete
  const fullText = "<Software Engineer />";

  useEffect(() => {
    setTimeout(() => {
      setNameVisible(true);
    }, 200);

    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(textInterval);
        setTimeout(() => {
          setPhase(1);
        }, 300);
      }
    }, 80);

    // Faster progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setPhase(2);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + Math.random() * 4;
      });
    }, 40);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full filter blur-3xl animate-pulse delay-1400"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #06b6d4 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating code-like elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/15 text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {
              ["{}", "[]", "()", "<>", "/>", "==", "=>", "&&"][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center space-y-6">
        <div
          className={`transition-all duration-1000 ease-out ${
            nameVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Ilyas Blidi
            </span>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto shadow-lg shadow-cyan-400/20"></div>
        </div>

        <div className="relative">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold relative">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse ml-2 text-cyan-400 text-2xl md:text-3xl lg:text-4xl">
              _
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 blur-xl scale-110 -z-10"></div>
        </div>

        <div className="w-80 mx-auto space-y-4">
          <div className="relative group">
            <div className="h-1 bg-gray-800/70 rounded-full overflow-hidden border border-gray-700/40 backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>

                <div className="absolute right-0 top-0 w-3 h-full bg-gradient-to-l from-cyan-400/50 to-transparent blur-sm"></div>
              </div>
            </div>

            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/40 animate-pulse"></div>
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/40 animate-pulse delay-300"></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm font-medium tracking-wide">
              {phase === 0
                ? "Initializing..."
                : phase === 1
                ? "Loading Portfolio..."
                : "Ready to Launch"}
            </div>
            <div className="text-gray-300 text-sm tabular-nums">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: ["#3b82f6", "#06b6d4", "#0ea5e9"][i],
                animationDelay: `${i * 0.2}s`,
                boxShadow: `0 0 8px ${["#3b82f6", "#06b6d4", "#0ea5e9"][i]}30`,
              }}
            />
          ))}
        </div>
      </div>

      {phase === 2 && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-cyan-500/3 to-blue-500/3 animate-pulse pointer-events-none"></div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse delay-700"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
