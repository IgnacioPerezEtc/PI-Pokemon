import React from 'react';
import "./Error.css"
const Error=()=>{
    const reload=()=>{
        window.location.reload()
    }
    return(
        <div className='errorBackground'>
        <h1 className='h1Error'>Lo siento, ha ocurrido un error</h1>
        <img className='imgError' src="https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-16.gif" alt="" />
        <br />
        <p className='pError'>Vuelve a casa por favor</p>
        <button className='buttonError' onClick={reload}>Volver a Home</button>
        </div>
        
    )
}
export default Error;