import { Layout } from "../components/Layout";
import "../styles/views/Dashboard.css"

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard">
                <main className="main-content">
                  <header className="header">
                    <h1>Dashboard Administrativo</h1>
                  </header>

                  <section className="cards">
                    <div className="card">
                      <h3>Ventas</h3>
                      <p>$15,200</p>
                    </div>
                    <div className="card">
                      <h3>Usuarios</h3>
                      <p>250</p>
                    </div>
                    <div className="card">
                      <h3>Productos</h3>
                      <p>120</p>
                    </div>
                    <div className="card">
                      <h3>Pedidos</h3>
                      <p>45</p>
                    </div>
                  </section>
                </main>
            </div>
        </Layout>
    )
}

export {  Dashboard }