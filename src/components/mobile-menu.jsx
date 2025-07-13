export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = ["home", "about", "projects", "contact"];

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {links.map((link, index) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-in-out transform
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
