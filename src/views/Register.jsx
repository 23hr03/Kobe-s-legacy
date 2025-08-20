import { useState} from "react";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/views/Registrate.css"

const  Register = () => {
    const [username, setUSername] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate()
    const handleBack = (e) =>{
        e.preventDefault()
        navigate("/login")
        
    }
    const handlSubmit = (e) =>{
        e.preventDefault()
        setError("")
        if (!username || !email || !password){
           setError("Debes llenar todos los campos")
           return
        }

        const nweUser={
           username, 
           email,
           password 
        }
        console.log(nweUser)
        setSuccess("Usuario registrado con exito...✔")

        setUSername("")
        setEmail("")
        setPassword("")
    }

    return (
        <Layout>

            <h1 className="titulo">REGÍSTRATE</h1>
            <h2 className="subtitulo">ÚNETE AL LEGADO DE KOBE</h2>
            <div className="registro-container">
   

                <form className="form-box" onSubmit={handlSubmit}>
                    
                    <label> NOMBRE DE USUARIO:
                        <input type="text" placeholder="Tu usuario" onChange={(e) => setUSername(e.target.value)} value={username}/>
                    </label>

                    <label> CORREO ELECTRÓNICO: 
                        <input type="email" placeholder="ejemplo@email.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label> 

                    <label> CONTRASEÑA:
                        <input type="password" placeholder="Crea tu contraseña" />
                    </label>

                    <label>CONFIRMAR CONTRASEÑA:
                        <input type="password" placeholder="Repite tu contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </label>


                    <div className="btns">
                      <button className="btn-registrar" >Crear cuenta</button>
                      <button onClick={handleBack} className="btn-volver" >Volver al login</button>
                    </div>
                </form>
                {error && <span className="texto-error">{error}</span>}
                {success && <span className="texto-exito"> {success}</span>}

                <p className="texto-final">
                  Forma parte de nuestra comunidad y disfruta de los mejores productos de
                  la <span className="nba">NBA 🏀</span>
                </p>
         </div>

        </Layout>
    )
}

export {  Register }