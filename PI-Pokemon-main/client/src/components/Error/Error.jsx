import React from 'react';
import { NavLink } from 'react-router-dom';

const Error=()=>{
    return(
        <>
        <h1>Lo siento, ha ocurrido un error</h1>
        <img src="https://i.pinimg.com/originals/b3/55/91/b35591e5d2ad32b8604b254861d59f58.gif" alt="" />
        <br />
        <p>Vuelve a casa por favor</p>
        <NavLink to="/home">Volver a Home</NavLink>
        </>
        
    )
}
export default Error;