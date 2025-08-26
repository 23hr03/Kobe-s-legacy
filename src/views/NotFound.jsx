import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import "../styles/views/NotFound.css";

const NotFound = () => {
  return (
    <Layout>
      <div className="notfound-card">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Página no encontrada</h2>
        <p className="notfound-text">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link to="/login" className="notfound-button">
          Ir al Login
        </Link>
      </div>
    </Layout>
  );
};

export { NotFound };