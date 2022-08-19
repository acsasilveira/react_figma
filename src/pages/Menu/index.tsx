import React from "react";
import * as S from "./styles";
import { BotaoComponent } from "components";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
      <S.Section>
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