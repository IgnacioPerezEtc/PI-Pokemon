import React from "react";
import "./Paginado.css"
export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className="paginadoLi" key={number}>
                <button className="buttonPaginado" onClick={() => paginado(number)}>{number}</button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
