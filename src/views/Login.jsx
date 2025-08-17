import { Layout } from "../components/Layout";
import "../styles/views/Login.css"

const Login = () => {
    return (
        <Layout>
            <h1 className="titulo">INICIA SESSION</h1>
            <h2 className="subtitulo">ÚNETE AL LEGADO DE KOBE</h2>
       
            <div className="inicio-container">
                <form className="form-box">

                    <label> CORREO ELECTRÓNICO:
                        <input type="email" placeholder="ejemplo@email.com" />
                    </label>  

                    <label> NOMBRE DE USUARIO:
                        <input type="text" placeholder="Tu usuario" />
                    </label>

                    <label> CONTRASEÑA:
                        <input type="password" placeholder="Crea tu contraseña" />
                    </label>


                    <div className="botones">
                      <button className="btn-iniciar">Iniciar Session</button>
                      <button className="btn-registrar">Registrate</button>
                    </div>
                </form>
                <p className="texto-final">
                  Forma parte de nuestra comunidad y disfruta de los mejores productos de
                  la <span className="nba">NBA 🏀</span>
                </p>
            </div>
          
        </Layout>
    )
}

export {  Login }