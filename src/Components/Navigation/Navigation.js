import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const MenuElements = [
  {
    path: "/home",
    name: "Home",
    icon: "fas fa-home"
  },
  {
    path: "/pollen",
    name: "Pollen",
    icon: "fas fa-leaf"
  },
  {
    path: "/forecast",
    name: "Forecast",
    icon: "fas fa-smog"
  }
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {MenuElements.map(item => (
          <li key={item.path}>
            <NavLink exact to={item.path}>
              <i className={item.icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
