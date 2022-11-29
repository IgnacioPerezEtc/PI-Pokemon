import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <>
      <div className={style.bodyLandingPage}>
        <div>
          <h1 className={style.titleLandingPage}>
            Bienvenido a mi PI de Pokemon
          </h1>
        </div>
        <div>
          <NavLink className={style.btnLandingPage} to="/home">
            Ir a home
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
