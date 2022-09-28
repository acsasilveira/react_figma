import { Routes, Route } from "react-router-dom";
import { AdmPage, CadastrarPage, HomePage, LayoutPage, LoginPage, MenuPage, SherlockPage } from "pages";
import ProtectedRoute from "./ProtectedRoute";
import Adm from "pages/Adm";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/sherlock" element={<SherlockPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="adm" element={<AdmPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
