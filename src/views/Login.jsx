import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/views/Login.css"
import { useAuth } from "../context/UserContext";

const Login = () => {

    const {login} = useAuth()

    const  handlLogin=(e) => {
        e.preventDefault()
        login()
        navigate("/home")
    }
    const navigate = useNavigate()

    const handlRegister = (e) =>{
        e.preventDefault()
        navigate("/register")
    }
    return (
        <Layout>
            <h1 className="titulo">INICIA SESSION</h1>
            <h2 className="subtitulo">ÚNETE AL LEGADO DE KOBE</h2>
       
            <div className="inicio-container">
                <form onSubmit={handlLogin} className="form-box">

                    <label> CORREO ELECTRÓNICO:
                        <input type="email" placeholder="ejemplo@email.com" />
                    </label>  

                    {/* <label> NOMBRE DE USUARIO:
                        <input type="text" placeholder="Tu usuario" />
                    </label> */}

                    <label> CONTRASEÑA:
                        <input type="password" placeholder="Crea tu contraseña" />
                    </label>


                    <div className="btns">
                      <button className="btn-iniciar">Iniciar Session</button>
                      <button onClick={handlRegister} className="btn-regist">Registrate</button>
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