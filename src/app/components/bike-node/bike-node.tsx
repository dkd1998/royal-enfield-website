import React, { useContext } from "react";
import classes from "./bike-node.module.scss";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiExpand } from "react-icons/bi";
import { ThemeContext } from "@/app/context/ThemeContext";

const BikeNode = (props: any) => {
  const { imageSource, bikeName } = props;
  return (
    <div className={classes["card"]}>
      <img src={imageSource} alt={bikeName} />
      <div className={classes["card-action-wrapper"]}>
        <h3>{bikeName}</h3>

        <div className={classes["card-action-wrapper-button"]}>
          <a>
            <BiExpand size={20} />
            <span>Explore</span>
          </a>
          <a>
            <AiOutlineSchedule size={25} />
            <span>Book Test Ride</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BikeNode;
