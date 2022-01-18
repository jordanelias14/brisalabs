import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../../components/pokemons/Pokemons";
import Header from "../../components/header/Header";
import "../VerTodos/listaPokemon.css";

const PokemonList = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [loadPokemon, setLoadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPokemon);
    const data = await res.json();

    setLoadPokemon(data.next);

    function newPokemonObj(result) {
      result.forEach(async (poke) => {
        const res2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${poke.name}`
        );
        const data2 = await res2.json();

        setListPokemons((currentList) => [...currentList, data2]);
      });
    }

    newPokemonObj(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (!listPokemons) {
    return null;
  }

  return (
    <>
      <Header></Header>
      <div className="app-container">
        <div>
          <div className="all-container">
            {listPokemons.length > 0 &&
              listPokemons.map((poke, index) => (
                // <Link to={`/pokemons/${poke.name}`}>
                <Pokemon
                  id={poke.id}
                  name={poke.name}
                  img={poke.sprites.other.dream_world.front_default}
                  type={poke.types[0].type.name}
                  key={index}
                />
                // </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
