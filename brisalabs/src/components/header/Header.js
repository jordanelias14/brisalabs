import React from "react";
import { Link, Redirect } from "react-router-dom";
import ButtonFav from "../buttonsMenu/ButtonFav";
import ButtonSearch from "../buttonsMenu/ButtonSearch";
import ButtonAll from "../buttonsMenu/ButtonAll";
import Img4 from "../../img/img4.png";
import Exit from "../../img/exit.png";
import "../header/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="http://localhost:3000/pokemons/list">
            <img className="logoPokemon" alt="Pokemon" src={Img4} />
          </a>
        </div>
        <div className="btn-menu">
          <Link to={`/pokemons/favoritos`}>
            <ButtonFav></ButtonFav>
          </Link>
          <Link to={`/pokemons/procurar`}>
            <ButtonSearch></ButtonSearch>
          </Link>
          <Link to={`/pokemons/list`}>
            <ButtonAll></ButtonAll>
          </Link>
        </div>
        <div className="btn-exit">
          <button className="exit">
            Sair
            <img className="exit-img" alt="Exit" src={Exit} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
