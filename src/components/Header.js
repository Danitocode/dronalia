import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      currentImage: this.props.images[0],
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.onChangePosition(null, 1), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  onChangePosition(e, value) {
    const maxValue = this.props.images.length;
    let current = this.state.selected;
    current = (current + value) % maxValue;
    if (current < 0) {
      current = maxValue - 1;
    }
    this.setState({
      selected: current,
      currentImage: this.props.images[current],
    });
  }

  render() {
    const { currentImage } = this.state;
    return (
      <header>


      <nav class="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar navbar-transparent">
  
        <div class="container-fluid">
  

          <a class="navbar-brand" href="https://mdbecommerce.com/">
            <i class="fab fa-mdb fa-3x" alt="mdb logo"></i>
          </a>
  

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  

          <div class="collapse navbar-collapse" id="basicExampleNav">
  

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#!" class="nav-link navbar-link-2 waves-effect">
                  <span class="badge badge-pill red">1</span>
                  <i class="fas fa-shopping-cart pl-0"></i>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <i class="united kingdom flag m-0"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#!">Action</a>
                  <a class="dropdown-item" href="#!">Another action</a>
                  <a class="dropdown-item" href="#!">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" class="nav-link waves-effect">
                  Sign in
                </a>
              </li>
              <li class="nav-item pl-2 mb-2 mb-md-0">
                <a href="#!" type="button"
                  class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                  up</a>
              </li>
            </ul>
  
          </div>

        </div>
  
      </nav>

  
      <div class="jumbotron jumbotron-image color-grey-light"
        style={{ backgroundImage: `url('${currentImage}')` }}>
        <div class="mask rgba-black-strong d-flex align-items-center h-100">
          <div class="container text-center white-text py-5">
            <h1 class="mb-0">Shop</h1>
          </div>
        </div>
      </div>
  
    </header>
      );
  }
}

export default Header;
Header.propTypes = {
  images: PropTypes.array,
};
Header.defaultProps = {
  images: [
    "/images/drone1.jpg",
    "https://i.picsum.photos/id/859/1900/250.jpg?hmac=-qp63LmIlFnEi-PAzNbLJ6rxB_glW9hP1zzBrHnVvL0",
  ],
};
