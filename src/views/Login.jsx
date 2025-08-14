import { Layout } from "../components/Layout";

const Login = () => {
    return (
        <Layout>
            <h1>Inicia session</h1>

            <section>
                <h2> Bienvendo, el legado de kobe te espera </h2>
                <form>
                    <div>
                        <label>Nombre de usuario</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div>
                        <label>Correo electronico</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password"/>
                    </div>
                    <button>iniciar session</button>
                </form>
            </section>
        </Layout>
    )
}

export {  Login }