import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
// import Nav from './Nav'
import Home from "./Home";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

function ReactRouter() {
  return (
    <Router>
      <div className="react-router-app app-container">
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/:contact" component={Contact} />
            <Route component={Shop} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default ReactRouter;
