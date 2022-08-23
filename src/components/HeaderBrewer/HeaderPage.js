// Componente header da page - atalho para montar componente: rafce
import React from "react";
import "./HeaderPage.scss";
//import styles from "./HeaderPage.scss";
import { GiHamburgerMenu } from "react-icons/gi";
//import { BiLogInCircle } from "react-icons/bi";

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
            <div className="header__button__login">
              <Button />
            </div>
          </nav>
        </div>

        <div>
          <div className="header__button__login">
            <Button />
          </div>
          <button className="toggle__user">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className="button">Login</button>;
};

export default HeaderPage;
