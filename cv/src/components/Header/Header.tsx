import React from "react";
import { useFela } from "react-fela";
import { Link } from "react-scroll";
import Logo from "../../assets/images/logo/Logo";

const styles = {
  header: {
    display: "flex",
    position: "fixed",
    top: 0, 
    left: 0, 
    width: "100%", 
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
    zIndex: 9999, 
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
            <Link
              to="personalInfo"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onPersonalInfoClick}
            >
              Personal Info
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onEducationClick}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="workExperience"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onWorkExperienceClick}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onSkillsClick}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onProjectsClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              className={css(styles.menuItem)}
              onClick={onContactClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
