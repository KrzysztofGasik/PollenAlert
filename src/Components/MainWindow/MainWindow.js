import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Info } from "./Info/Info";
import { Pollen } from "./Pollen/Pollen";

export const MainWindow = () => {
  return (
    <main className="main__window">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/pollen" component={Pollen} />
      </Switch>
    </main>
  );
};
