import React from "react";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faAws, faJava, faReact, faGofore } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../common/card";
import "./styles/skills.css"; // Import the updated CSS

const Skills = () => {
  const skills = [
    { name: 'AWS', icon: faAws, level: 'Intermediate' },
    { name: 'GoLang', icon: faGofore, level: 'Beginner' },
    { name: 'Java', icon: faJava, level: 'Expert' },
    { name: 'React', icon: faReact, level: 'Advanced' },
  ];

  return (
    <Card
      icon={faLightbulb}
      title="Skills"
      body={
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className={`bubble skill${index}`} key={index} onClick={() => console.log(`Clicked ${skill.name}`)}>
              <FontAwesomeIcon icon={skill.icon} />
              <div className="tooltip">
                {skill.name} - {skill.level}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Skills;