import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contato from "../pages/Contato";

const AppRoutes = () => {
  function getPageWithLayout(page: JSX.Element) {
    return (
      <>
        <Header />
        {page}
        <Footer />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={getPageWithLayout(<Home />)} />
      <Route path="/contato" element={getPageWithLayout(<Contato />)} />
    </Routes>
  );
};

export default AppRoutes;
