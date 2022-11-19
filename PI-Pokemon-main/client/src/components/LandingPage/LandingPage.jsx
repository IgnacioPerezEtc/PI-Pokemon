import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <>
        <div className="bodyLandingPage">
            <div>
                   <h1 className="tituloLandingPage">Bienvenido a mi Proyecto Individual</h1>
            </div>
           <div>
              <NavLink className="btnLandingPage"to="/home">Ir a home</NavLink>
           </div>
      
        </div>
      
        </>
    )
}
export default LandingPage;