import React from "react";
import * as S from "./styles";
import sh from "assets/img/SH/Partitura-the-game-is-on.png";
import download from "assets/img/símbolo.png";
import { BotaoComponent } from "components";
import { Link } from "react-router-dom";

const Sherlock = () => {
    return (
      <S.Section>
          <div>
            <Link to= "assets/img/símbolo.png">
              <img src={download} alt="Baixe aqui a partitura" />
            </Link>
            <h1>The Game is On - Sherlock Holmes</h1>
          </div>
          <div>
            <img src={sh} alt="partitura"/>
          </div>
      </S.Section>
    );
  };
  
  export default Sherlock;