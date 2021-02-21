import React, { Component } from "react";
import PopulateDrones from "./populateInitialDrones.component";
import Slider from "./slider.component";
import {  Link } from "react-router-dom";

class Home extends Component {
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

      });
  }

  render() {
    return (
      <>


      
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Bienvenidos a Dronalia</h1>
          <p className="lead">El sitio más confiable de drones.</p>
          <hr className="my-4"/>
          <p>Revisa los drones disponibles</p>
          <Link to={"/catalog"} className="btn btn-primary btn-lg" >
                Catálogo
          </Link>
          
        </div>

      {<Slider/>}

          <div className="row">
          <h1 className="display-4">Los mejores drones</h1>
          {<PopulateDrones/>}
          </div>


      </div>
    </>
    );
  }
}

export default Home;
