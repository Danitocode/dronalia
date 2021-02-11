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
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="card-deck mb-3 text-center py-3" > 
              {items.map(item => (

              <div class="col-md-3 col-lg-3 col-xs-3"  style={ { marginBottom: "25px"} }>
                <div class="card">
                  <img src="../images/.jpg" class="card-img-top" alt="drone" width="100" height="100"/>
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">Eje : {item.axis}</p>
                    <p class="card-text">Medida : {item.size}</p>
                    <p class="card-text">Color : {item.colour}</p>
                    <p class="card-text">Precio : {item.price}€</p>
                    <button type="button" class="btn btn-primary">Comprar</button>
                  </div>
                </div>
              </div>              
        ))}
      </div>;
    }
  }
}

export default PopulateDrones;
