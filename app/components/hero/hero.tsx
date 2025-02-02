import { type FC } from "react";
import "./hero.css"; // Import the CSS file for Hero

const Hero: FC = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="intro">
          <h1>
            Hello, My Name is <span></span>
          </h1>
          <h1 className="name">ILYAS BLIDI</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
