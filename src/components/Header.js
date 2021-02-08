import React from "react";
import PropTypes from "prop-types";

const nav = {
  border: "solid",
  width: "2px",
  color: "#ccc",
};

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
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light py-md-2"
          style={{ nav }}
        >
          <a class="navbar-brand" href="#">
            <img
              src="./img/landing-page/film-icon.png"
              width="32"
              height="32"
              class="d-inline-block align-top"
              alt=""
            />
            Postermania
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ofertas
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Ofertas series
                  </a>
                  <a class="dropdown-item" href="#">
                    Ofertas películas
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Último minuto
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Registro
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Tus pedidos
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                id="txt-search"
                type="search"
                placeholder="nombre serie o película"
                aria-label="buscar"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                id="btn-search"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>

        <div
          class="jumbotron jumbotron-image color-grey-light"
          style={{ backgroundImage: `url('${currentImage}')` }}
        >
          <div class="mask rgba-black-strong d-flex align-items-center h-100">
            <div class="container text-center white-text py-5">
              <h1 class="mb-6">The best drone shop</h1>
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
