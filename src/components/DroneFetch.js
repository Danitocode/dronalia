import React, { Component } from "react";
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Personalization from "./Personalization";

class PopulateDrone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
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
      return <div className="card-deck mb-3 text-center py-3">
              {items.map(item => (

                <div id="film-${item.id}" class="card mb-4 shadow-sm" style={{width: "14rem"}}>
                <img src="./img/film/${item.image}" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text"><span class="text-info">Duración:</span>${item.duration}</p>
                    <p class="card-text"><span class="text-info">Director:</span>${item.director}</p>
                    <p class="card-text"><span class="text-info bold">Género:</span>${item.genre}</p>
                    <p class="card-text price">${item.price}</p>
                </div>
                <div class="card-header">Stars</div>
                <ul class="list-group list-group-flush">
                </ul>

                <Router>
                  <Route path="/Personalization" component={Personalization}/>
                  <Link to="/Personalization">Comprar</Link>

                </Router>

                </div>
              ))}
      </div>;
    }
  }
}

export default PopulateDrone;
