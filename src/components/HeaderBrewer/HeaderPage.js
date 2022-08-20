// Componente header da page - atalho para montar componente: rafce
import React from "react";
import "./HeaderPage.scss";
//import styles from "./HeaderPage.scss";

const HeaderPage = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div>
          <span className="logo">Logo</span>
        </div>

        <div>
          <nav className="navbar__header">
            <a className="nav__item" href={"/"}>
              Home
            </a>
            <a className="nav__item" href={"/"}>
              Beers
            </a>
            <a className="nav__item" href={"/"}>
              Contact
            </a>
          </nav>
        </div>

        <div>
          <div className="header__login"></div>
          <button className="user__login"></button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
