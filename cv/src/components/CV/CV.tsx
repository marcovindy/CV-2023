import React, { useRef } from 'react';
import { useFela } from 'react-fela';

import { Header } from '../Header';
import { PersonalInfo } from '../PersonalInfo';
import { Education } from '../Education';
import { WorkExperience } from '../WorkExperience';
import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

export interface CVProps {}

export const CV = ({}: CVProps) => {
  const { css } = useFela();

  const personalInfoRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header
        onPersonalInfoClick={() => scrollToSection(personalInfoRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onWorkExperienceClick={() => scrollToSection(workExperienceRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div className={css(styles.container)}>
        <div ref={personalInfoRef}>
          <PersonalInfo />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={workExperienceRef}>
          <WorkExperience />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
  },
};
