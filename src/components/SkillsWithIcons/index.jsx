import React from 'react';

export const SkillsWithIcons = ({ skills }) => {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => {
          return (
            <div 
              key={index} 
              className="skill-item"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
