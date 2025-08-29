import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/components/Header.css";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout, setSearchTerm } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header>
      <nav>
        <img
          src="https://i.pinimg.com/originals/8f/e8/1f/8fe81f04f49b8b87ee24c43afb7f62ca.png"
          alt="logo"
        />
        <label className="busqueda">
          <input
            placeholder="Búsqueda de productos..."
            type="search"
            onChange={handleInputChange}
          />
          <button>🔍</button>
        </label>
        <button
          type="button"
          className="hamburger"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {user ? (
              <>
                <li>
                  <Link to="/Home" onClick={() => setMenuOpen(false)}>Inicio</Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                </li>
                <li>
                  <button type="button" onClick={handleLogout}>Cerrar sesión</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => setMenuOpen(false)}>Registrate</Link>
                </li>
              </>
            )}
        </ul>
      </nav>

      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
};

export { Header };