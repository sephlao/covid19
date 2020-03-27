import React from "react";
import { Virus, Moon } from "./Icon";
const Header = () => {
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
          <button className="btn svg">
            <Moon />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
