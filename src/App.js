import React from "react";
import Header from "../src/components/Header";
import DroneFetch from "../src/components/DroneFetch";
import Footer from "../src/components/Footer";
import Slider from "../src/components/Slider";



function App() {
  return (<>
      <div className="container">
      <header>
        <Header />
        <Slider />
      </header>

      <DroneFetch className="tab-pane fade show active" id="nav-films" role="tabpanel" aria-labelledby="nav-home-tab" />
      
      <Footer />
    </div>
    
  </>


  );
}

export default App;

