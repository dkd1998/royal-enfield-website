import React from "react";
import classes from "./homepage.module.scss";

const HomePage = () => {
  return (
    <div className={classes["hero"]}>
      <img src="/bullet-350-home.jpeg" alt="hero-image" />
    </div>
  );
};

export default HomePage;
