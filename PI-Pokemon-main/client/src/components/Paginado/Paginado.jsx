import React from "react";
import "./Paginado.css"
export default function Paginado({ pokemonsPerPage, allPokemons, paginado, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
       { currentPage!==1&&
       <li className="liPaginado">
          <button className="buttonPaginado" onClick={()=>paginado(--currentPage)}>{"Prev"}</button>
        </li>}
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className="paginadoLi" key={number}>
                <button className="buttonPaginado" onClick={() => paginado(number)}>{number}</button>
              </li>
            );
          })}
          {  currentPage!==pageNumbers.length&&<li className="liPaginado">
          <button className="buttonPaginado" onClick={()=>paginado(++currentPage)}>{"Next"}</button>
        </li>}
      </ul>
    </nav>
  );
}
