import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Products from "./components/populateDrones.component";
import Nav from "./components/nav.component";

import Presentation from "./components/presentation.component";

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
            <Route path="/user" component={BoardUser} />
            {/*<Route path="/mod" component={BoardModerator} />*/}
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/presentation" component={Presentation} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
