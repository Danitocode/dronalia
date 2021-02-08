import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Landpage from "../src/components/Landpage";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Landpage}></Route>
          <Route path="/Main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
