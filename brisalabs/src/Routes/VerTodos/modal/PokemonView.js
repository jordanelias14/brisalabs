import React, { useEffect, useState } from "react";
import "../modal/pokemonView.css";
import Close from "../../../img/close.png";

const PokemonView = ({ name, onClose = () => {} }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="container-modal">
      <div className="container-close">
        <button className="close-modal" onClick={onClose}>
          <img alt="close" src={Close}></img>
        </button>
      </div>
      <p>Detalhes</p>
      <hr></hr>
      <h1>{pokemon.name}</h1>
      <div className="container-imgs">
        <img
          className="img-front"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <img
          className="img-back"
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
        />
      </div>
      <div className="info-massa">
        <h3>
          {pokemon.height + "m"} {pokemon.weight + "kg"}
        </h3>
      </div>
      <div className="poke-info2">
        <h4>{pokemon.types[0].type.name}</h4>
      </div>
      <div className="estats">
        <p>Estatísticas</p>

        <ul className="PokemonView__abilities">
          {pokemon.stats.map((item) => (
            <li type="none">{item.stat.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn-addFav">Adicionar aos favoritos</button>
      </div>
    </div>
  );
};

export default PokemonView;
