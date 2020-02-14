import React from "react";
import { Route, Switch } from "react-router-dom";
/* Views */
import Create from "./views/Create.js";
import History from "./views/History.js";
import Home from "./views/Home.js";
/** Autonomous */
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/history" component={History} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
