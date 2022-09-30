import React from "react";
import { MenuComponent, RodapeComponent } from "components";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

const Layout = () => {
  return (
    <S.Layout>
      <MenuComponent />
      <main>
        <Outlet />
      </main>
      <RodapeComponent />
    </S.Layout>
  );
};

export default Layout;
