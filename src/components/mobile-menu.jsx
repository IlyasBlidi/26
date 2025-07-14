import { HashLink } from "react-router-hash-link";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setMenuOpen(false);
        }
      }}
    >
      <nav
        className="flex flex-col items-center"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {links.map((link, index) => (
          <HashLink
            key={link.id}
            to={`#${link.id}`}
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
            className={`text-2xl font-semibold text-white my-4 transition-all duration-300 ease-in-out transform hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.label}
          </HashLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
