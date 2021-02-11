import React, { Component } from "react";
import PopulateDrones from "../components/populateDrones.component";

class AdminWarehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/test/drones")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
          
        });
        console.log(json);

      });
  }

  render() {
    return (
      <>
      <div className="container">

          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Almacén Norte</a>
              <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Almacén Sur</a>
              <a className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Almacén Este</a>
            </div>
          </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            

          <div className="row row-cols-3 row-cols-md-2 g-4">
          {<PopulateDrones/>}
          </div>


          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            


          <div className="row row-cols-3 row-cols-md-2 g-4">

          {/*<PopulateAmateurDrone/> */}


          </div>



          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            


          <div className="row row-cols-3 row-cols-md-2 g-4">
          {/*<PopulateAmateurDrone/> */}


          </div>



          </div>
        </div>
      </div>
    </>
    );
  }
}

export default AdminWarehouse;
