import React from "react";
import "./styles.css";

function NavBar() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="cart_items_deco">2</span>
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg
              className="cart me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 align-items-center ">
            <li>
              <h2 className="pe-4 text-secondary"> Avicola Campomoro </h2>
            </li>
            <li>
              <a href={" "} className="nav-link px-2 text-white">
                Pollo
              </a>
            </li>
            <li>
              <a href={" "} className="nav-link px-2 text-white">
                Carnes
              </a>
            </li>
            <li>
              <a href={" "} className="nav-link px-2 text-white">
                Rebozados
              </a>
            </li>
            <li>
              <a href={" "} className="nav-link px-2 text-white">
                Almacen
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Iniciar Sesion
            </button>
            <button type="button" className="btn btn-warning">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
