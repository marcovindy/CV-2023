import React from "react";
import { useFela } from "react-fela";

import AuthorIMG from '../../assets/images/author.jpg';

const headerHeight = "120px";

const styles = {
  container: {},
  personalInfo: {
    marginTop: headerHeight,
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100px",
    borderRadius: "50%",
    marginRight: "16px",
  },
  h2: {
    textAlign: "right",
  }
};

export interface PersonalInfoProps {}

export const PersonalInfo = ({}: PersonalInfoProps) => {
  const { css } = useFela();

  return (
    <>
      <div className={css(styles.personalInfo)}>
        <img src={AuthorIMG} alt="Profile" className={css(styles.image)} />
        <div>
          <h2 className={css(styles.h2)}>Personal Info</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolor eaque molestiae adipisci nihil ad itaque dolorum quisquam unde
            exercitationem sint magnam velit fugit totam libero eveniet,
            placeat maiores a?
          </div>
        </div>
      </div>
    </>
  );
};
