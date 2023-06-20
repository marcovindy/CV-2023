import React from "react";

export interface HeaderProps {
  onPersonalInfoClick: () => void;
  onEducationClick: () => void;
  onWorkExperienceClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Header = ({
  onPersonalInfoClick,
  onEducationClick,
  onWorkExperienceClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}: HeaderProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#personalInfo" onClick={onPersonalInfoClick}>
              Personal Info
            </a>
          </li>
          <li>
            <a href="#education" onClick={onEducationClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#workExperience" onClick={onWorkExperienceClick}>
              Work Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={onSkillsClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={onProjectsClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onContactClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
