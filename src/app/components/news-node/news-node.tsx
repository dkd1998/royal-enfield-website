import React from "react";

import classes from "./news-node.module.scss";

const NewsNode = (props: any) => {
  const { imageSource, heading, description } = props;
  return (
    <div className={classes["card"]}>
      <img src={imageSource} alt={heading} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsNode;
