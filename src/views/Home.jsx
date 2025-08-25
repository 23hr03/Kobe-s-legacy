import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/views/Home.css"
import logo from "../assets/logo.jpg"
import { useAuth } from "../context/UserContext";

const Home = () => {
  const[products, setProducts] = useState([])
  const[produtEdit, setProdutEdit] = useState(null)
  const[showPopup, setShowpopup] = useState(null)
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");

  
  
    // similando el estado del usuario pronto forma global
    const { user, searchTerm } = useAuth();

    
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



    const handlUpdate = async (e) =>{

        e.preventDefault()
        const updateProduct={
            title: titleEdit,
            price: Number(priceEdit),
            description: descriptionEdit,
            category: categoryEdit,
            image: imageEdit
        }

        const response = await fetch(`https://fakestoreapi.com/products/${produtEdit.id}`,{ 
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateProduct)
        })

        if(response.ok){
            const data = await response.json()
            setProducts(prevProduct => prevProduct.map((product) => 
            product.id === produtEdit.id 
            ? data: 
            product
            ))
        }

        setProdutEdit(null);
        setShowpopup(false);

    }
    const filteredProducts = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <Layout >
            <div className="title">
                <h1>Bienvenido a nustra tienda virtual </h1>
                <h2>Nuestros Productos</h2>
            </div>

            { showPopup && (
                <section className="edit-product">
                    <button 
                      className="close-btn" 
                      onClick={() => { setProdutEdit(null); setShowpopup(false) }}
                    >
                      ✖
                    </button>
                
                    <h2 className="title-edit">Editando producto...</h2>
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo-edit" />
                    </div>
                
                    <div className="edit-product-content">
                      {/* Tarjeta de preview */}
                      { produtEdit && (
                        <div className="product-preview">
                          <img src={produtEdit.image} alt={produtEdit.title} />
                          <div>
                            <h3>{produtEdit.title}</h3>
                            <p><strong>${produtEdit.price}</strong></p>
                            <p>{descriptionEdit.description}</p>
                            <p>{produtEdit.category}</p>
                          </div>
                        </div>
                      )}
                    

                      {/* Formulario */}
                      <form className="edit-form" onSubmit={handlUpdate}>
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
                    </div>
              </section>
              
                
                
                )}
            
            
         
            <section className="productos">
             
                { 
                
                  filteredProducts.map((product) =>
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