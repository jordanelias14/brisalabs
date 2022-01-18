import React from "react";
import PokemonList from "./Routes/VerTodos/ListaPokemons";
import Procurar from "./Routes/procurar/Procurar";
import Favoritos from "./Routes/favoritos/Favoritos";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StoreProvider from "./components/store/Provider";
import RoutesPrivate from "./Routes/private/Private";

import Login from "./Routes/login/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <StoreProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/pokemons/list" component={PokemonList} />
            <RoutesPrivate path="/pokemons/procurar" component={Procurar} />
            <Route path="/pokemons/favoritos" component={Favoritos} />
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </StoreProvider>
      </Router>
    </div>
  );
}
