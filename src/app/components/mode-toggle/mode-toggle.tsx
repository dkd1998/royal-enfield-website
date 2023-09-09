"use client";
import React, { useState, useContext } from "react";
import classes from "./mode-toggle.module.scss";

import { BsMoonStarsFill } from "react-icons/bs";

import { FaSun } from "react-icons/fa6";
import { ThemeContext } from "@/app/context/ThemeContext";

const ModeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <a className={classes["button-wrapper"]} onClick={toggleTheme}>
      <span className={classes["button-wrapper__sun"]}>
        <FaSun size={20} />
      </span>
      <span className={classes["button-wrapper__moon"]}>
        <BsMoonStarsFill size={20} />
      </span>

      <span
        className={classes["button-wrapper__toggler"]}
        style={mode === "light" ? { right: "3px" } : { left: "4px" }}
      ></span>
    </a>
  );
};

export default ModeToggle;
