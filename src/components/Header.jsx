import { Link } from "react-router-dom"


const Header =()=> {
    return (
        <header className="header">
            <nav >
                <img src="https://i.pinimg.com/736x/d9/d0/3b/d9d03b4b8d515fc118835bb29ddff604.jpg" alt="logo" />
                <ul>
                    <li><Link to="/"></Link>Inicio</li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="registrate">Registrate</Link></li>
                    <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
    )
}

export {Header}