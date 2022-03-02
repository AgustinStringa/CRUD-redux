import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container ">
          <Link to={"/"}>
            <h1 className="text-white p-3 ">
              CRUD - React, Redux, REST API & Axios
            </h1>
          </Link>
        </div>

        <Link
          to="/products/new"
          className="btn btn-danger nuevo-post d-block d-md-block"
        >
          Agregar Producto +
        </Link>
      </nav>
    </header>
  );
};

export default Header;
