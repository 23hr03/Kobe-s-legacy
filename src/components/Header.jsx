import { Link } from "react-router-dom"
import "../styles/components/Header.css"

const Header =()=> {
    return (
        <header>
            <nav >
                <img src="https://i.pinimg.com/originals/8f/e8/1f/8fe81f04f49b8b87ee24c43afb7f62ca.png" alt="logo" />
                <ul>
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Registrate</Link></li>
                    
                    <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
    )
}

export {Header}