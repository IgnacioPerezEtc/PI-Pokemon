import React from "react";
import style from "./Paginado.module.css";
export default function Paginado({
  pokemonsPerPage,
  allPokemons,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {currentPage !== 1 && (
          <li className={style.liPaginado}>
            <button
              className={style.buttonPaginado}
              onClick={() => paginado(--currentPage)}
            >
              Prev
            </button>
          </li>
        )}
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className={style.paginadoLi} key={number}>
                <button
                  className={style.buttonPaginado}
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              </li>
            );
          })}
        {currentPage !== pageNumbers.length && (
          <li className={style.liPaginado}>
            <button
              className={style.buttonPaginado}
              onClick={() => paginado(++currentPage)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
