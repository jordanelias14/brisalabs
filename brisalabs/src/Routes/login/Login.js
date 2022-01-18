import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../../components/store/Context";
import "../login/login.css";
import LogoLogin from "../../img/img1.png";
import LoginImg from "../../img/loginImg.png";

function initialState() {
  return { user: "", password: "" };
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(e) {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function login({ user, password }) {
    if (user === "admin" && password === "admin") {
      return { token: "12345" };
    }
    return { error: "Usuário ou senha inválido" };
  }

  function onSubmit(e) {
    e.preventDefault();
    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push("/pokemons/list");
    }
    setValues(initialState);
  }

  return (
    <>
      <div className="user-login">
        <div className="logo-login">
          <img className="img-login" alt="logo-login" src={LogoLogin}></img>
        </div>
        <h1 className="user-login__title">Comece a coletar pokemóns!</h1>
        <form className="form-login" onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user"></label>
            <input
              id="user"
              type="text"
              placeholder="Email"
              name="user"
              onChange={onChange}
              value={values.user}
            ></input>
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Senha"
              name="password"
              onChange={onChange}
              value={values.password}
            ></input>
          </div>
          <button type="submit" className="user-login__submit-btn">
            Entrar
          </button>
        </form>
      </div>
      <div className="img-background">
        <img className="img-backgnd" alt="logo-backgnd" src={LoginImg}></img>
      </div>
    </>
  );
};

export default Login;
