import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const MenuElements = [
  {
    path: "/",
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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false
    };
  }

  switchMenu = () => {
    this.setState({
      swap: !this.state.swap
    });
  };

  render() {
    return (
      <nav>
        {this.state.swap ? (
          <i className="fas fa-bars" onClick={this.switchMenu} />
        ) : 
          <i className="far fa-window-close" onClick={this.switchMenu} />
        }
        <ul className={this.state.swap ? "menu__hidden": "menu__visible"}>
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
  }
}

export { Navigation };
