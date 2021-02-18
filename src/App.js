import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import BoardUser from "./components/catalog.component";
import AdminWarehouse from "./components/board-admin.component";
import Nav from "./components/nav.component";


class App extends Component {
  
  render() {

    return (
      <div className="container">
        <Nav/>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/catalog" component={BoardUser} />
            <Route path="/admin" component={AdminWarehouse} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
