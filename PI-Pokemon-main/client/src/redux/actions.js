import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON ";
export const ERROR = "ERROR";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const json = await axios.get(" http://localhost:3001/pokemons");
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: true,
      });
    }
  };
}
export function setError(payload) {
  return {
    type: ERROR,
    payload,
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: json.data.pop(),
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: true,
      });
    }
  };
}

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    const json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    return dispatch({
      type: GET_POKEMON_BY_NAME,
      payload: json.data,
    });
  };
};

export function createPokemon(data) {
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/pokemons", data);
    return json;
  };
}

export function getTypes() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPES,
      payload: json.data,
    });
  };
}

export function orderAlphabetically(payload) {
  return {
    type: ORDER_ALPHABETICALLY,
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function filterByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}
