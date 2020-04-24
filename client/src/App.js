import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className='sticky-top navBar text-dark'>
        <h1>Bubbles</h1>
        {/* <ul className="links">
          <li className="p-2">Login</li>
          <li className="p-2">Bubbles</li>
        </ul> */}
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/protected' component={BubblePage} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
