import React, { useState } from "react";
import Heart from "../../img/heart.png";
import PokemonView from "../../Routes/VerTodos/modal/PokemonView";
import "../pokemons/pokemon.css";
const Pokemon = ({ id, name, img, type }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="poke-container">
        <div className="heart-fav">
          <img className="heart" src={Heart} alt="favorito" />
        </div>
        <img className="poke-img" src={img} alt={name} />
        <div className="poke-info">
          <h2>{name}</h2>
          <p>ID: {id}</p>
          <h4>{type}</h4>
        </div>
        <div>
          <button
            onClick={() => setModalVisible(true)}
            className="btn-detalhes"
          >
            Ver Detalhes
          </button>
        </div>
        <div className="ref-modal">
          {modalVisible ? (
            <PokemonView onClose={() => setModalVisible(false)} name={name} />
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Pokemon;
