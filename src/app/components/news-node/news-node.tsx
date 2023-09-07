import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import classes from "./news-node.module.scss";

const NewsNode = (props: any) => {
  const { imageSource, heading, description, date } = props;
  return (
    <div className={classes["card"]}>
      <img src={imageSource} alt={heading} />
      <h3>{heading}</h3>
      <div className={classes["card-date"]}>
        <AiOutlineCalendar size={20} />
        <span>{date}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NewsNode;
