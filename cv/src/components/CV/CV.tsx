import React from 'react';
import { useFela } from 'react-fela';

import {Header} from '../Header';
import {PersonalInfo} from '../PersonalInfo';
import {Education} from '../Education';
import {WorkExperience} from '../WorkExperience';
import {Skills} from '../Skills';
import {Projects} from '../Projects';
import {Contact} from '../Contact';

export interface CVProps {}

export const CV = ({}: CVProps) => {
  const { css } = useFela();

  return (
    <div className={css(styles.container)}>
      <Header/>
      <PersonalInfo />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

const styles = {
  container: {
    // Styly pro kontejner životopisu
  },
};
