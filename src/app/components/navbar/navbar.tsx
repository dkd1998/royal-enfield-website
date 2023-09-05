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
  return (
    <div className={classes["nav-container"]}>
      {navigationLinks.map((link) => (
        <Link href={link.url} key={link.id} className={classes.link}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
