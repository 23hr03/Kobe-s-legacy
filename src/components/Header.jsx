function Header() {
    return (
        <header className="header">
            <nav >
                <img src="https://i.pinimg.com/736x/d9/d0/3b/d9d03b4b8d515fc118835bb29ddff604.jpg" alt="logo" />
                <ul>
                    <li><a href="/"></a>Inicio</li>
                    <li><a href="dashboard">Dashboard</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="registrate">Registrate</a></li>
                    <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
    )
}

export {Header}