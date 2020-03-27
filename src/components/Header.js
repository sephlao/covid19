import React, { useState } from "react";
import { Virus, Moon, Sun } from "./Icon";

const Header = () => {
  const [theme, setTheme] = useState("light");
  document.body.className = theme;
  document.querySelector("meta[name=theme-color]")
  .setAttribute('content', theme === 'dark' ? '#27253B': '#fbfbfb');
  return (
    <header className="header">
      <ul>
        <li>
          <button className="btn svg">
            <Virus />
          </button>
        </li>
        <li>
          <h1 className="title">Covid-19</h1>
        </li>
        <li>
          <button
            className="btn svg"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
