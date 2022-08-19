import React from "react";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Cadastrar = () => {
  return (
    <S.Section>
      <h1>Cadastre-se</h1>
      <form action="cadastrar.html" method="post">
        <label htmlFor="nome">Nome</label>
        <div>
          <BsFillPersonFill />
          <input type="text" name="nome" id="nome" placeholder="Nome" />
        </div>
        <label htmlFor="email">E-mail</label>
        <div>
          <MdEmail />
          <input type="email" name="email" id="email" placeholder="E-mail" />
        </div>
        <label htmlFor="senha">Senha</label>
        <div>
          <FaKey />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
        </div>
        <p>
          Já possui conta? <Link to="/login">Faça o login</Link>
          <Link to="/menu">
            <ButtonComponent>Salvar</ButtonComponent>
          </Link>
        </p>
      </form>
    </S.Section>
  );
};

export default Cadastrar;
