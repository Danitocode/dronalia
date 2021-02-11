import React, { Component } from "react";
import PopulateDrones from "./populateDrones.component";
import Slider from "./slider.component";

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
        console.log(json);

      });
  }

  render() {
    return (
      <>
      <div className="container">
      {<Slider/>}
      <div class="jumbotron">
        <h1 class="display-4">Bienvenidos a Dronalia</h1>
        <p class="lead">El sitio más confiable de drones.</p>
        <hr class="my-4"/>
        <p>Revisa los drones disponibles</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Catálogo</a>
      </div>


          <div className="row">
          {<PopulateDrones/>}
          </div>


      </div>
    </>
    );
  }
}

export default Home;
