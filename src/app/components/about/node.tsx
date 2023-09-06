import React from "react";
import classes from "./node.module.scss";

const AboutNode = (props: any) => {
  const isIndexEven = props.index % 2 == 0;

  return (
    <div className={classes["node-wrapper"]}>
      <div
        className={classes["node-wrapper-image"]}
        style={{ order: isIndexEven ? 1 : 2 }}
      >
        <img src={props.imageSource} alt={props.title} />
      </div>
      <div
        className={classes["node-wrapper-description"]}
        style={{ order: isIndexEven ? 2 : 1 }}
      >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AboutNode;
