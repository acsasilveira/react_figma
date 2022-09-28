import React from "react";
import { GrLogout } from "react-icons/gr";
import * as S from "./styles";
import { BotaoComponent } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHook";
import User from "services/data/User";
import userEvent from "@testing-library/user-event";

const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.Section>
      <nav> 
        {
          user ? (
            <ul>
              <li>

                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : ()}
      </nav>
      <div>
        <Link to="/sherlock">
          <BotaoComponent>The Game is On Sherlock Holmes</BotaoComponent>
        </Link>
      </div>
      <div>
        <Link to="">
          <BotaoComponent>La Vals de las Flores</BotaoComponent>
        </Link>
      </div>
      <div>
        <Link to="">
          <BotaoComponent>Hallellujah</BotaoComponent>
        </Link>
      </div>
    </S.Section>
  );
};
  
export default Menu;