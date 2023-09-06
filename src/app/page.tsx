import React from "react";
import classes from "./page.module.scss";
import HomePage from "./components/homepage/homepage";

const DefaultPage = () => {
  return (
    <div className={classes.container}>
      <HomePage></HomePage>
    </div>
  );
};

export default DefaultPage;
