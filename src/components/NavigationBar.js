import React from "react";
import icon from "./icon.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <section className="nav-bar">
      <ul>
        <li>
          <img className="image" alt="Git Hub" src={icon}></img>
        </li>
        <li>Why GitHub?</li>
        <li>Team</li>
        <li>Enterprise</li>
        <li>Explore</li>
        <li>Marketplace</li>
        <li>Pricing</li>
      </ul>
    </section>
  );
};

export default NavigationBar;
