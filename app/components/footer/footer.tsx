import type { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="animated-text">
          Copyright © {currentYear} by Ilyas Blidi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
