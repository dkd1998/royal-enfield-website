import React from "react";
import AboutNode from "../components/about/node";
import classes from "../page.module.scss";
import AboutContainer from "../components/about/about-container";

const about = () => {
  return (
    <div className={classes.container}>
      <AboutContainer></AboutContainer>
    </div>
  );
};

export default about;
