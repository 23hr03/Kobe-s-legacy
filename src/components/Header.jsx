import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/components/Header.css"

const Header =()=> {
    const [user, setUser] = useState(false)
    return (
        <header>
            <nav >
                <img src="https://i.pinimg.com/originals/8f/e8/1f/8fe81f04f49b8b87ee24c43afb7f62ca.png" alt="logo" />
                <ul>

                    {user && <>
                        <li><Link to="/Home">Inicio</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <button>Cerrar sesion</button>
                        </>
                    }

                    {!user && <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Registrate</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export {Header}