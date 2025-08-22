import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/views/Home.css"

const Home = () => {
    const[user, setUser] = useState(true)
    const[products, setProducts] = useState([])
    const[produtEdit, setProdutEdit] = useState(null)
    const[showPopup, setShowpopup] = useState(null)
    const [titleEdit, setTitleEdit] = useState("");
    const [priceEdit, setPriceEdit] = useState("");
    const [descriptionEdit, setDescriptionEdit] = useState("");
    const [categoryEdit, setCategoryEdit] = useState("");
    const [imageEdit, setImageEdit] = useState("");

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

    const handdlOPenedit =  (product) => {
        setProdutEdit(product)
        setShowpopup(true)
        setTitleEdit(product.title)
        setPriceEdit(product.price)
        setDescriptionEdit(product.description)
        setCategoryEdit(product.category)
        setImageEdit(product.image)

    }



    const handlUpdate = async () =>{

    }


    return (
        <Layout >
            <div className="title">
                <h1>Bienvenido a nustra tienda virtual </h1>
                <h2>Nuestros Productos</h2>
            </div>

            { showPopup && (
                <section className="edit-product">
                  <h2>Editando producto...</h2>
                  <button onClick={() => { setProdutEdit(null); setShowpopup(false) }}>Cerrar</button>
                    
                    <form onSubmit={(e) => { e.preventDefault(); handlUpdate(); }}>
                        <input 
                          type="text" 
                          placeholder="Title" 
                          value={titleEdit} 
                          onChange={(e) => setTitleEdit(e.target.value)} 
                        />
                        <input 
                          type="number" 
                          placeholder="Price" 
                          value={priceEdit} 
                          onChange={(e) => setPriceEdit(e.target.value)} 
                        />
                        <textarea 
                          placeholder="Descripcion" 
                          value={descriptionEdit} 
                          onChange={(e) => setDescriptionEdit(e.target.value)} 
                        />
                        <input 
                          type="text" 
                          placeholder="Category" 
                          value={categoryEdit} 
                          onChange={(e) => setCategoryEdit(e.target.value)} 
                        />
                        <input 
                          type="text" 
                          placeholder="Imagen" 
                          value={imageEdit} 
                          onChange={(e) => setImageEdit(e.target.value)} 
                        />    
                        <button type="submit">Actualizar</button>                    
                    </form>
                </section>
                )}
            
            
         
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
                            <button className="btn-edi" onClick={() => handdlOPenedit(product)}>Editar </button>
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