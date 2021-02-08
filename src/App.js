import React from "react";
import Main from "../src/components/Main";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "../src/css/App.css";


function App() {
  return (<>
      <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
    <Modal />
    
  </>


  );
}

export default App;

