import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/views/Login.css"
import { useAuth } from "../context/UserContext";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    
    const navigate = useNavigate();

    const {login} = useAuth()

    const  handlLogin= async (e) => {
        e.preventDefault()
        setError("")
        if (!username || !password){
           setError("Debes llenar todos los campos")
           return
        }
        const success = await login(username, password);
        if (success) {
          navigate("/home");
        } else {
          setError("Usuario o contraseña incorrectos");
        }
        
    }

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

                    <label> USERNAME:
                        <input 
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            placeholder="Ingresa tu nombre de usuario" 
                            value={username}/>
                    </label>  

                    <label> CONTRASEÑA:
                        <input  
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder="Crea tu contraseña"
                            value={password} />
                            
                    </label>


                    <div className="btns">
                      <button className="btn-iniciar">Iniciar Session</button>
                      <button type="button" onClick={handlRegister} className="btn-regist">Registrate</button>
                    </div>
                </form>
            {error && <span className="texto-error">{error}</span>}
            

                <p className="texto-final">
                  Forma parte de nuestra comunidad y disfruta de los mejores productos de
                  la <span className="nba">NBA 🏀</span>
                </p>
            </div>
          
        </Layout>
    )
}

export {  Login }