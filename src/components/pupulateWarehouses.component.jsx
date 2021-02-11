import { render } from "@testing-library/react";
import React, { Component } from "react";

class PopulateDrones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/test/warehouses")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
          
        });
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
                  <img src="../images/.jpg" className="card-img-top" alt="Local" width="100" height="100"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Dirección : {item.address}</p>
                  </div>
                </div>
              </div>              
        ))}
      </div>;
    }
  }
}

export default PopulateDrones;
