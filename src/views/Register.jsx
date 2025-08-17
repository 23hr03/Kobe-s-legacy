import { Layout } from "../components/Layout";
import "../styles/views/Registrate.css"

const  Register = () => {
    return (
        <Layout>

            <h1 className="titulo">REGÍSTRATE</h1>
            <h2 className="subtitulo">ÚNETE AL LEGADO DE KOBE</h2>
            <div className="registro-container">
   

                <form className="form-box">
                    <label> NOMBRE COMPLETO: 
                    <input type="text" placeholder="Escribe tu nombre" />
                    </label>


                    <label> CORREO ELECTRÓNICO: 
                        <input type="email" placeholder="ejemplo@email.com" />
                    </label> 
                    <label> NOMBRE DE USUARIO:
                        <input type="text" placeholder="Tu usuario" />
                    </label>

                    <label> CONTRASEÑA:
                        <input type="password" placeholder="Crea tu contraseña" />
                    </label>

                    <label>CONFIRMAR CONTRASEÑA:
                        <input type="password" placeholder="Repite tu contraseña" />
                    </label>


                    <div className="botones">
                      <button className="btn-registrar">Crear cuenta</button>
                      <button className="btn-volver">Volver al login</button>
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

export {  Register }