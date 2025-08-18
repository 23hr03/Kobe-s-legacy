import { Layout } from "../components/Layout";
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
          <a href="/" className="notfound-button">Volver al inicio</a>
        </div>
      </Layout>
    );
  };
  
  export { NotFound };
