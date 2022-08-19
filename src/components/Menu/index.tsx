import React from "react";
import nota from "assets/img/notas.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to ="/">
          <img src={nota} alt='Notas' />
        </Link>
      </picture>
      <nav>
        <h1> Partituras de Piano Gratuitas</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
