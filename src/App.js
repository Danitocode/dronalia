import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Landpage from "../src/components/Landpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Landpage}/>
            <Route path="/Main" component={Main} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <Route path="/Cart" component={Cart} />

          </Switch>
          <Footer />

        </div>

      </Router>
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
