import React, { Component } from "react";

class PopulateDrone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/drones")
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
      return <div className="card-deck mb-3 text-center py-3">
              {items.map(item => (

                <div id="film" className="card mb-4 shadow-sm" style={{width: "14rem"}}>
                <img src="#" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><span className="text-info">Eje:</span>{item.axis}</p>
                    <p className="card-text"><span className="text-info">Medida</span>{item.size}</p>
                    <p className="card-text"><span className="text-info bold">Color</span>{item.colour}</p>
                    <p className="card-text price">{item.price}</p>
                </div>
                <div className="card-header">Stars</div>
                <ul className="list-group list-group-flush">
                </ul>

                </div>
              ))}
      </div>;
    }
  }
}

export default PopulateDrone;
