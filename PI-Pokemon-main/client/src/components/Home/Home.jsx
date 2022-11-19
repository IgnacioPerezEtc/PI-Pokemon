import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { getAllPokemons } from "../../redux/actions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../Pokemon/Pokemon.jsx";
import Error from "../Error/Error.jsx";
import Paginado from "../Paginado/Paginado.jsx";
export const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const error = useSelector((state) => state.error);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
  if (error) {
    return <Error />;
  } else if (allPokemons.length) {
    return (
      <>
        <div className="bodyHome">
          <SearchBar />

          <div>
            {currentPokemons.map((pokemon) => {
              return (
                <Pokemon
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                />
              );
            })}
          </div>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          <NavLink className="NavLinkToLanding" to="/">
            Volver a inicio
          </NavLink>
        </div>
      </>
    );
  } else {
    return (
      <div className="loadingContainer">
        <SearchBar></SearchBar>
        <div>
          <h1>Loading</h1>
        </div>
        <div className="loadingImgContainer">
          <img
            src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
};
export default Home;
