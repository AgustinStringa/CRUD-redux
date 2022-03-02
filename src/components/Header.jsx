import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-rpimary justify-content-between">
        <div className="container ">
          <h1 className="text-white p-3 ">
            CRUD - React, Redux, REST API & Axios
          </h1>
        </div>

        <a
          href="/productos/nuevo"
          className="btn btn-danger nuevo-post d-block d-md-block"
        >
          Agregar Producto +
        </a>
      </nav>
    </header>
  );
};

export default Header;
