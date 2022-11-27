import "./SearchBar.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByType,
  filterCreated,
  getAllPokemons,
  getPokemonByName,
  getTypes,
  orderAlphabetically,
  orderByAttack,
} from "../../redux/actions";

import Error from "../Error/Error.jsx";
export const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const types = useSelector((state) => state.types);
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const error = useSelector((state) => state.error);
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatch(getPokemonByName(input));
    setInput("");
  };
  const handleChangeByExisting = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (value === "Todos") {
      dispatch(getAllPokemons());
    }
    if(value)
    dispatch(filterCreated(value));
  };
  const handleChangeAlphabetically = (event) => {
    event.preventDefault();
    let value = event.target.value;
    dispatch(orderAlphabetically(value));
  };
  const handleChangeByAttack = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (value === "Todos") {
      dispatch(getAllPokemons());
    }
    dispatch(orderByAttack(value));
  };
  const reload = () => {
    window.location.reload();
  };
  const handleChangeByType = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (value === "all") {
      dispatch(getAllPokemons());
    }
    dispatch(filterByType(value));
    setSelectTypes({ type: [value] });
  };
  const [selectTypes, setSelectTypes] = useState({ type: [] });
  const handleDeleteType = (event) => {
    event.preventDefault();
    setSelectTypes({
      type: [],
    });
    window.location.reload();
    dispatch(getAllPokemons());
  };
  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  return (
    <>
      <div className="nav-container">
        <input
          className="inputSearchBar"
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
          placeholder="Encuentra tu pokemon"
        />
        <button
          className="btnSearchBar"
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Buscar
        </button>
        <div className="NavLinkContainer"></div>
      </div>
      <div className="flex-container">
        <div>
          {" "}
          <button onClick={reload} className="Refresh">
            Refresh
          </button>
          <select
            onChange={(event) => handleChangeAlphabetically(event)}
            defaultValue="title"
            className="inputHome"
          >
            <option value="title" disabled name="Alfabetico">
              Ordenar Alfabeticamente
            </option>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
          </select>
          <select
            onChange={(event) => handleChangeByAttack(event)}
            defaultValue="title"
            className="inputHome"
          >
            <option value="title" disabled name="Ataque">
              Ordenar por ataque
            </option>
            <option value="strong">Desde el mas fuerte</option>
            <option value="weak">Desde el mas debil</option>
          </select>
          <select
            onChange={(event) => handleChangeByType(event)}
            name="types"
            defaultValue="title"
            className="inputHome"
          >
            <option value="title" disabled name="Tipos">
              Filtrado por tipo
            </option>
            {types.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          
            {selectTypes.type?.map((type, index) => {
              console.log(type)
              return (
                <div key={index}>
                  <p className="pForm" key={type}>
                    {type}
                  </p>
                  <button onClick={(event) => handleDeleteType(event)}>
                    x
                  </button>
                </div>
              );
            })}
       
          <select
            onChange={(event) => {
              handleChangeByExisting(event);
            }}
            defaultValue="title"
            className="inputHome"
          >
            <option value="Todos">Ordenar por todos</option>
            <option value="Existente">Ordenar por existente</option>
            <option value="Creado">Ordenar por creado</option>
          </select>
          <NavLink className={"btnHome"} to="/form">
            Crea tu propio pokemon
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
