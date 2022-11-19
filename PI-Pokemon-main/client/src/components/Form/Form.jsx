import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createPokemon, getAllPokemons, getTypes } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
const Form = () => {
  function validate(input) {
    const errors = {};
    if (!input.name || input.name.length < 3) {
      errors.name = "Debe tener un nombre de mas de tres letras";
    }
    if (!input.hp || input.hp < 0 || input.hp > 150) {
      errors.hp = "Debe tener hp entre 1 - 150";
    }

    if (!input.attack || input.attack < 0 || input.attack > 150) {
      errors.attack = "Debe tener ataque entre 1 - 150";
    }

    if (!input.defense || input.defense < 0 || input.defense > 150) {
      errors.defense = "Debe tener defensa entre 1 - 150";
    }

    if (!input.speed || input.speed < 0 || input.speed > 150) {
      errors.speed = "Debe tener velocidad entre 1 - 150";
    }
    if (!input.weight) {
      errors.weight = "Debe tener peso";
    }
    if (!input.height) {
      errors.height = "Debe tener altura";
    }

    //if (input.types.length === 0) {
      //errors.types = "Debe tener por lo menos un tipo";
    //}
    return errors;
  }
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const types = useSelector((state) => state.types);
  const history = useHistory();
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPokemon(input));
    alert("se ha creado con exito");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    history.push("/home");
    dispatch(getAllPokemons());
  };
  const handleSelect = (event) => {
    if (!input.types.includes(event.target.value)) {
      setInput({
        ...input,
        types: [...input.types, event.target.value],
      });
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    let filterOfTypes = input.types.filter(
      (type) => type !== event.target.value
    );
    setInput({
      ...input,
      types: filterOfTypes,
    });
  };
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });
  let ButtonDisabled =
    !(
      input.name.length &&
      input.hp.length &&
      input.attack.length &&
      input.defense.length &&
      input.speed.length &&
      input.types.length
    ) ||
    input.hp > 150 ||
    input.attack > 150 ||
    input.defense > 150 ||
    input.speed > 150;
  return (
    <>
      <div className="bodyForm">
        <div className="NavLinkContainer">
          <NavLink className="NavLinkForm" to="/home">
            Volver a Home
          </NavLink>
        </div>
        <div className="form-container">
          <div className="div-container">
            <div>
              <h3>Crea tu propio Pokemon</h3>
            </div>

            <div>
              <div>
                <div>
                  <label>Nombre</label> <br />
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.name}
                    name="name"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="text"
                    placeholder="Nombre"
                  />{" "}
                    {errors.name && <div className="Errors">{errors.name}</div>}<label>Hp</label><br />
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.hp}
                    name="hp"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="number"
                    placeholder="Hp (1-150)"
                  />
                  <br />
               
                  {errors.hp && <div className="Errors">{errors.hp}</div>}
               
                  <label>Attack</label> 
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.attack}
                    name="attack"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="number"
                    placeholder="Ataque (1-150)"
                  />{" "} {errors.attack && (
                    <div className="Errors">{errors.attack}</div>
                  )}
                 <label>Defense</label><br />
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.defense}
                    name="defense"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="number"
                    placeholder="Defensa (1-150)"
                  />
                  <br />
                 
                  {errors.defense && (
                    <div className="Errors">{errors.defense}</div>
                  )}
              
                  <label>Speed</label> 
                  <br />
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.speed}
                    name="speed"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="number"
                    placeholder="Velocidad(1-150)"
                  />
  {errors.speed && <div className="Errors">{errors.speed}</div>}<br></br>

                 <label>Height</label>
                  <input
                    autoComplete="off"
                    className="input-item"
                    value={input.height}
                    name="height"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    type="number"
                    placeholder="Altura"
                  />
                  <br />
                
                  {errors.height && (
                    <div className="Errors">{errors.height}</div>
                  )}
                </div>

                <label>Weight</label>

                <input
                  autoComplete="off"
                  className="input-item"
                  value={input.weight}
                  name="weight"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                  placeholder="Peso"
                />  {errors.weight && <div className="Errors">{errors.weight}</div>}
                <label>Image</label><br />
                <input
                  autoComplete="off"
                  className="input-item"
                  value={input.image}
                  name="image"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  placeholder="Inserta tu url"
                />
              </div>{" "}
            
              <br />
              <select
                disabled={input.types.length === 2}
                onChange={(e) => handleSelect(e)}
                name="types"
                defaultValue="title"
              >
                <option value="title" disabled name="Tipos">
                  Tipos
                </option>
                {types?.map((type, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
              {input.types?.map((type) => {
                return (
                  <div key={type}>
                    <p key={type}>{type}</p>
                    <button
                      value={type}
                      onClick={(event) => handleDelete(event)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
              <br />
              {errors.types && <div className="Errors">{errors.types}</div>}
              <br />
              <input
                type="submit"
                value="Crear"
                disabled={ButtonDisabled}
                onClick={(event) => {
                  handleSubmit(event);
                }}
                className="crearBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;