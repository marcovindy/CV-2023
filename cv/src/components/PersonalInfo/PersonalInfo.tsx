import React from "react";
import { useFela } from "react-fela";

const headerHeight = "120px";

const styles = {
  container: {
  },
  personalInfo: {
    marginTop: headerHeight,
  },
};

export interface PersonalInfoProps {}

export const PersonalInfo = ({}: PersonalInfoProps) => {
  const { css } = useFela();

  return (
    <>
      <div className={css(styles.personalInfo)}>
        <h2>Personal Info</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dolor eaque molestiae adipisci nihil ad itaque dolorum quisquam unde
          exercitationem sint magnam velit fugit totam libero eveniet, placeat
          maiores a?
        </div>
      </div>
    </>
  );
};
