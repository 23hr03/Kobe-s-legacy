import { Layout } from "../components/Layout";
import "../styles/views/Login.css"

const Login = () => {
    return (
        <Layout>
            <h1>Inicia session</h1>

            <section className="login">
                <h2 > Bienvendo, el legado de kobe te espera </h2>
                <form className="formulario">
                    <div>
                        <label>Nombre de usuario:</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div>
                        <label>Correo electronico:</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div className="botones">
                        <button className="enviar">Registrar</button>
                        <button className="enviar">Iniciar session</button>
                    </div>
                    
                </form>
            </section>

            <main>
                <p> Inicia session para que puedas difrutar de nuestra tienda online con los mejores productos de la NBA🏀</p>
            </main>
        </Layout>
    )
}

export {  Login }