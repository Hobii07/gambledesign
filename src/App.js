import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sale from "./components/pages/Sale";
import Events from "./components/pages/Events";
import Buyhere from "./components/pages/Buyhere";

function App() {
  return (
    // BEM
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sale" component={Sale} />
          <Route path="/Events" component={Events} />
          <Route path="/Buyhere" component={Buyhere} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
