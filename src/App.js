import React from "react";
import Main from "../src/components/Main";
import Header from "../src/components/Header";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

