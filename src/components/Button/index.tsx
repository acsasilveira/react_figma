import React from "react";
import * as S from "./styles";
import { IButton } from "interfaces/button.interface";

const Button = ({ children }: IButton) => {
  return <S.Botao>{children}</S.Botao>;
};

export default Button;
