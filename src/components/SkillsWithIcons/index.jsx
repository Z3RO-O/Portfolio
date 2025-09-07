import React from "react";

export const SkillsWithIcons = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((category, catIndex) => (
        <div key={catIndex} className="skills-category">
          <h4 className="category-title">{category.category}</h4>
          <div className="skills-grid">
            {category.items.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{ "--skill-color": skill.color }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
