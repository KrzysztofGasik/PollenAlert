import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import "../scss/style.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Footer />
      </HashRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
