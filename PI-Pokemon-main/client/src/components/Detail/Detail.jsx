import React from "react";
import "./Detail.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemonById } from "../../redux/actions.js";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);
  if (
    pokemonDetail.hasOwnProperty("name") &&
    (pokemonDetail.id === parseInt(id) || pokemonDetail.id === id)
  ) {
    //if(false){
    return (
      <>
        <div className="bodyDetail">
          <div className="NavLinkContainerDetail">
            <NavLink className="NavLinkDetail" to="/home">
              Volver a Home
            </NavLink>
          </div>

          <div className="pokemonContainer">
            <h1 className="pokemonTitle">
              {pokemonDetail.name.charAt(0).toUpperCase() +
                pokemonDetail.name.slice(1)}
            </h1>
            <img className="pokemonImg" src={pokemonDetail.image} alt="" />
            <p className="p-item">Hp: {pokemonDetail.hp}</p>
            <p className="p-item">Attack: {pokemonDetail.attack}</p>
            <p className="p-item">Defense: {pokemonDetail.defense}</p>
            <p className="p-item">Speed: {pokemonDetail.speed}</p>
            <div>
              <p className="p-item">Height: {pokemonDetail.height}</p>
              <p className="p-item">Weight: {pokemonDetail.weight}</p>
            </div>

            <p className="span-item">
              Types:
              {pokemonDetail.types.map((type) => {
                return (
                  <span key={type.name} className="type">
                    
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="loadingContainer">
        <h1 className="loadingH2">Loading</h1>
        <img
          className="loadingImg"
          src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif"
          alt=""
        />
      </div>
    );
  }
};

export default Detail;
/*<p>Name: {pokemonDetail.name}</p>
            <p>Hp: {pokemonDetail.hp}</p>
            <p>Attack: {pokemonDetail.attack}</p>
            <p>Defense: {pokemonDetail.defense}</p>
            <p>Speed: {pokemonDetail.speed}</p>
            <p>Height: {pokemonDetail.height}</p>
            <p>Weight: {pokemonDetail.weight}</p>*/
