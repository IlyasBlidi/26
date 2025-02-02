import { useEffect, useState, type FC } from "react";
import "./header.css"; // Import the CSS file for Header

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Check scroll position on page load and on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nameElement = document.querySelector("#hero .intro h1.name");
      if (nameElement) {
        const namePosition = nameElement.getBoundingClientRect().bottom;
        if (namePosition < 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    // Check scroll position on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>I</span>lyas <span>B</span>lidi
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
              <li>
                <a href="#hero" data-after="Home" onClick={handleMenuItemClick}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  data-after="About"
                  onClick={handleMenuItemClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  data-after="Service"
                  onClick={handleMenuItemClick}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  data-after="Projects"
                  onClick={handleMenuItemClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#socials"
                  data-after="More Info"
                  onClick={handleMenuItemClick}
                >
                  More Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
