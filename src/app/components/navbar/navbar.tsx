"use client";

import Link from "next/link";
import React from "react";
import classes from "./navbar.module.scss";

const navigationLinks = [
  {
    id: 1,
    name: "Motorcycles",
    url: "/motorcycles",
  },
  {
    id: 2,
    name: "About Us",
    url: "/about",
  },
];

const Navbar = () => {
  const clickhandler = () => {};

  return (
    <div className={classes["nav-container"]}>
      <Link href="/" className={classes["logo-container"]}>
        <img src="/re-logo.png" alt="" />
      </Link>

      <div>
        {navigationLinks.map((link) => (
          <Link href={link.url} key={link.id} className={classes.link}>
            {link.name}
          </Link>
        ))}
      </div>

      <button type="button" className={classes.login} onClick={clickhandler}>
        Login
      </button>
    </div>
  );
};

export default Navbar;
