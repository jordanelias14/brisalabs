import React, { useState } from "react";
import Pokemon from "../../components/pokemons/Pokemons";
import "../procurar/procurar.css";
import Void from "../../img/void.png";
import Header from "../../components/header/Header";

const BUSCA_API = `https://pokeapi.co/api/v2/pokemon/`;

function Procurar() {
  const [pokes, setPokemons] = useState([]);
  const [buscador, setBuscador] = useState("");

  const getPokemons = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (buscador) {
      getPokemons(BUSCA_API + buscador);

      setBuscador("");
    }
  };

  const handleOnChange = (e) => {
    setBuscador(e.target.value);
  };

  return (
    <>
      <Header></Header>
      <div className="general">
        <form onSubmit={handleOnSubmit}>
          <div className="general-input">
            <input
              id="input-Search"
              className="search"
              type="text"
              placeholder="Procure por pokemóns"
              value={buscador}
              onChange={handleOnChange}
            ></input>
          </div>
        </form>

        {pokes && pokes.name !== undefined ? (
          <div className="pokes-encontrados">
            <Pokemon
              id={pokes.id}
              name={pokes.name}
              img={pokes.sprites.other.dream_world.front_default}
              type={pokes.types[0].type.name}
            />
          </div>
        ) : (
          <>
            <div className="void">
              <img className="void-img" alt="void" src={Void}></img>
            </div>
            <h1 className="h1-Search">Está meio vazio por aqui!</h1>
            <p className="p-Search">Procure por pokémons </p>
          </>
        )}
      </div>
    </>
  );
}

export default Procurar;
