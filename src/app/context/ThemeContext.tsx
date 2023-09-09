"use client";

import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = (props: any) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className={`theme ${mode}`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};
