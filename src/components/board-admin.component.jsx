import React, { Component } from "react";
import PopulateWarehouses from "../components/pupulateWarehouses.component";
import UserService from "../services/user.service";

export default class AdminWarehouse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
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
            

          <div className="row">
          {<PopulateWarehouses/>}
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

