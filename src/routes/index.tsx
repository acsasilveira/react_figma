import { Routes, Route } from "react-router-dom";
import { CadastrarPage, HomePage, LayoutPage, LoginPage, MenuPage, SherlockPage } from "pages";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/sherlock" element={<SherlockPage />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
