import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

class PopulateInitialDrones extends Component {
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
        return json;
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="card-deck mb-3 text-center py-3" > 
              {items.map(item => (

              <div className="col-md-3 col-lg-3 col-xs-3"  style={ { marginBottom: "25px"} }>
                <div className="card">
                  <img src="../images/drone6.jpg"  className="card-img-top" alt="drone" width="100" height="100"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Eje : {item.axis}</p>
                    <p className="card-text">Medida : {item.size}</p>
                    <p className="card-text">Color : {item.colour}</p>
                    <p className="card-text">Precio : {item.price}€</p>
                    <Link to={"/catalog"} className="btn btn-primary btn-lg" >
              Catálogo
        </Link>
                  </div>
                </div>
              </div>              
        ))}
      </div>;
    }
  }
}

export default PopulateInitialDrones;
