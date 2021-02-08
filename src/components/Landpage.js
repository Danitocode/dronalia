import React from "react";
import PopulateDrone from "./PopulateDrone";
import Footer from "./Footer";

import Slider from "./Slider";



function Landpage() {
  return (<>
      <div className="container">
        
      <header>
        <Slider />
      </header>

      <PopulateDrone className="tab-pane fade show active" id="nav-films" role="tabpanel" aria-labelledby="nav-home-tab" />
      
      <Footer />


    </div>
    
  </>


  );
}

export default Landpage;

