import React from "react";

const nav = {
  border: "solid",
  width: "2px",
  color: "#ccc",
};

class Header extends React.Component {
  render() {
    return (

        <nav
          class="navbar navbar-expand-lg navbar-light bg-light py-md-2"
          style={{ nav }}>
          <div>
            <a class="navbar-brand" href="#">
            <div  style={{float:"center"}}>
              Dronalia
            </div>
              <img
                src="../images/dronelogo.ico"
                width="75"
                height="75"
                class="d-inline-block align-top"
                alt=""
              />
            </a>

          </div>
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



    );
  }
}

export default Header;


