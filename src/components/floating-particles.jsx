export const FloatingParticles = ({ particleColor, count = 6 }) => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 ${particleColor} rounded-full`}
        style={{
          left: `${15 + i * 10}%`,
          top: `${20 + i * 8}%`,
          animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
