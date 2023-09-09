"use client";
import React, { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import classes from "./news-node.module.scss";
import { ThemeContext } from "@/app/context/ThemeContext";

const NewsNode = (props: any) => {
  const { mode } = useContext(ThemeContext);
  const { imageSource, heading, description, date } = props;
  return (
    <div
      className={classes["card"]}
      style={{ background: mode === "light" ? "white" : "#3A3A3A" }}
    >
      <img src={imageSource} alt={heading} />
      <h3>{heading}</h3>
      <div className={classes["card-date"]}>
        <span className={classes["card-date__icon"]}>
          <AiOutlineCalendar size={20} />
        </span>
        <span className={classes["card-date__date"]}>{date}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NewsNode;
