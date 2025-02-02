import type { FC } from "react";
import "./about.css"; // Import the CSS file for About

const About: FC = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-center">
          <h1 className="section-title">
            About <span>me</span>
          </h1>
          <h2>Software and Data Engineering Student</h2>
          <p>
            My name is ILYAS BLIDI, I am currently in the final year of studies
            in Computer Science and Data Engineering at the National School of
            Applied Sciences of Khouribga (ENSA Khouribga). I am passionate for
            developing digital solutions. I thrive on exploring emerging
            technologies and working on creative projects that not only enhance
            my skills but also inspire innovative ideas.
            <br />I have a growing interest in web development and am eager to
            deepen my knowledge in this field. With every project, I aim to
            expand my expertise and contribute to building digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
