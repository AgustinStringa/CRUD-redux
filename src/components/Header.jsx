import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-success">
        <h1 className="text-white p-3 ">
          CRUD - React, Redux, REST API & Axios
        </h1>

        <a href="/productos/nuevo" className="btn btn-danger nuevo-post p-3">
          Agregar Producto +
        </a>
      </nav>
    </header>
  );
};

export default Header;
