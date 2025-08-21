import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/views/Home.css"

const Home = () => {
    const[user, setUser] = useState(true)
    const[ products, setProducts] = useState([])
    const fetchingProducts = async () =>{
        const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
        const data = await response.json()
        
       setProducts(data)
    }
    useEffect(() =>{
        
        fetchingProducts()
    },[])

    const handlDelete = async (id) =>{
       const response = await fetch(`https://fakestoreapi.com/products/${id}`, {method: "DELETE"})
        
        console.log(response)

        if(response.ok){
           setProducts( prevProduct => prevProduct.filter((product) => product.id != id ))
        //    fetchingProducts()
        }
    }


    return (
        <Layout >
            <div className="title">
                <h1>Bienvenido a nustra tienda virtual </h1>
                <h2>Nuestros Productos</h2>
            </div>
            
         
            <section className="productos">
                { 
                    products.map((product) =>
                    <div key={product.id}>
                        <h2 >{product.title}</h2>
                        <img src={product.image} alt={`imagen de ${product.title}`} />
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <p><strong>{product.category}</strong></p>

                      { user && <>
                        <div className="botones"> 
                            <button className="btn-edi">Editar </button>
                            <button className="btn-borrar" onClick={() => handlDelete(product.id)}>Borrar</button> 
                        </div>
                      </>
                      }
                        
                        
                    </div>
                    
                    )
                }
             
            </section>
        </Layout>
    )
}

export {  Home }