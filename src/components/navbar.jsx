import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen, setMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16 overflow-x-hidden">
          <HashLink
            to="/#home"
            className="text-2xl font-extrabold tracking-tight text-white"
            smooth
          >
            ilyas<span className="text-blue-500">.blidi</span>
          </HashLink>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <HashLink
                key={section}
                to={`/#${section}`}
                smooth
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </HashLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
