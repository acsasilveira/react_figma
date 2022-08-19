import React from "react";
import titulo from "assets/img/Nome_do_título.png";
import piano from "assets/img/piano.png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={titulo} alt="Acsa Silveira" />
      </picture>
      <aside>
        <img src={piano} alt="Piano" />
      </aside>
    </S.Home>
  );
};

export default Home;
