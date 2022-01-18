import React from "react";
import Void from "../../img/void.png";
import "../favoritos/favoritos.css";
import Header from "../../components/header/Header";

const Favoritos = () => {
  return (
    <>
      <Header></Header>
      <div className="container-Fav">
        <div className="reference-Fav">
          <img className="img__Fav" alt="void" src={Void}></img>
        </div>
      </div>

      <h1 className="h1-Fav">Está meio vazio por aqui!</h1>
      <p className="p-Fav">
        Procure por pokémons para adicioná-los aos seus favoritos.{" "}
      </p>

      <div className="reference-text__Fav">
        <button className="btn-searchFav">Procurar pokemóns</button>
      </div>
    </>
  );
};

export default Favoritos;
