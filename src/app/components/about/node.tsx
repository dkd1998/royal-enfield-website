"use client";

import React from "react";
import { useEffect, useState } from "react";
import classes from "./node.module.scss";

const AboutNode = (props: any) => {
  const isIndexEven = props.index % 2 == 0;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // Update the viewport width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes["node-wrapper"]}>
      <div
        className={classes["node-wrapper-image"]}
        style={{ order: isIndexEven || viewportWidth < 800 ? 1 : 2 }}
      >
        <img src={props.imageSource} alt={props.title} />
      </div>
      <div
        className={classes["node-wrapper-description"]}
        style={{ order: isIndexEven || viewportWidth < 800 ? 2 : 1 }}
      >
        <h2>{props.title}</h2>
        <span>{props.title}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AboutNode;
