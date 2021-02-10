import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <div style={{ float: "center" }}>Dronalia</div>
            <img
              src="../images/dronelogo.ico"
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  <p>Inicia Sesión</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Signup">
                  <p>Registrate</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                  <p>Carrito</p>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
