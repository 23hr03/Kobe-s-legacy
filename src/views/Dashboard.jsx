import { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/views/Dashboard.css"

const Dashboard = () => {
  const[name, setName] = useState()
  const[price, setPrice] = useState()
  const[description, setDescription] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newProduct ={
      id: crypto.randomUUID(),
      name: name,
      price: price,
      description: description
     }

  }
    return (
        <Layout>
            <h1>Panel de administracion</h1>
            
            <form  onSubmit={handleSubmit}>

                <label> Nombre del producto:
                  <input type="text" name="nombre" onChange={(e) => setName(e.target.value)} />
                </label>
            
                <label> Precio del producto:
                  <input type="text" name="price" onChange={(e) => setName(e.target.value)} />
                </label>
    
                <label> Descripcion :
                  <input type="text" name="description" onChange={(e) => setName(e.target.value)} />
                </label>

              <div>
                <button className="btn"> Crear producto</button>
              </div>

              

            </form>
        </Layout>
    )
}

export {  Dashboard }