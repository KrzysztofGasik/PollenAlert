import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Pollen } from "./Pollen/Pollen";
import { Forecast } from "./Forecast/Forecast";

export const MainWindow = () => {
  return (
    <main className="main__window">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pollen" component={Pollen} />
        <Route path="/forecast" component={Forecast} />
      </Switch>
    </main>
  );
};
