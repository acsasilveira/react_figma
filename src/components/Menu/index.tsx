import React from "react";
import { GrLogout } from "react-icons/gr";
import nota from "assets/img/notas.png";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHook";

const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }

  return (
    <S.Cabecalho>
      <picture>
        <Link to ="/">
          <img src={nota} alt='Notas' />
        </Link>
      </picture>
      <nav>
        <h1> Partituras de Piano Gratuitas</h1>
        { user ? (
        <ul>
          <li>
            <button onClick={logout}>{user.name} <GrLogout /></button>
          </li>
        </ul>

        ): (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
          </ul>

        )}
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
