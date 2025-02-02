import type { FC } from "react";
import "./skills.css"; // Import the CSS file for Skills
import { skills } from "@/data";

const Skills: FC = () => {
  return (
    <section id="skills">
      <div className="skills container">
        <div className="skill-top">
          <h1 className="section-title">
            Sk
            <span>I</span>
            LLS
          </h1>
          <p>
            My academic training at ENSA KHOURIBGA has enabled me to develop
            strong skills in various fields, including web development and
            DevOps practices.
            <br /> These experiences helped me master modern technologies
            and agile methodologies, while enhancing my ability to solve complex
            problems and design innovative solutions tailored to market needs.
          </p>
        </div>
        <div className="skill-bottom">
          {skills.map((skill, index) => {
            const Icon = skill.iconComponent; // Note the capital I
            return (
              <div
                key={`skill${index}`}
                className={`skill-item ${skill.cssName}`} // Apply the cssName as a class
              >
                <div className="skill-name">{skill.name}</div>
                <div className="skill-icon">
                  <Icon size="25px" color="white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
