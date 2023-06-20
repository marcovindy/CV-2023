import React from "react";
import { useFela } from "react-fela";
import Logo from "../../assets/images/logo/Logo";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "100px",
    marginRight: "8px",
  },
  nav: {
    display: "flex",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    marginLeft: "auto",
  },
  menuItem: {
    width: "100%",
    padding: "0.5rem",
  },
};

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
  const { css } = useFela();

  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logoContainer)}>
        <Logo w={100} h={100} />
      </div>
      <nav className={css(styles.nav)}>
        <ul className={css(styles.ul)}>
          <li>
            <a
              href="#personalInfo"
              onClick={onPersonalInfoClick}
              className={css(styles.menuItem)}
            >
              Personal Info
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={onEducationClick}
              className={css(styles.menuItem)}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#workExperience"
              onClick={onWorkExperienceClick}
              className={css(styles.menuItem)}
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={onSkillsClick}
              className={css(styles.menuItem)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={onProjectsClick}
              className={css(styles.menuItem)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={onContactClick}
              className={css(styles.menuItem)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
