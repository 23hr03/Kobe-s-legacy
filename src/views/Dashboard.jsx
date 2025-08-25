import { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/views/Dashboard.css"

const Dashboard = () => {
  const[name, setName] = useState("")
  const[price, setPrice] = useState("")
  const[description, setDescription] = useState("")
  const[image, setImage] = useState("")
  const[category, setCategory] = useState("")
  const[product, setProduct] = useState(null)
  const[error, setError] = useState(null)

  const handleSubmit = async (e) =>{
    e.preventDefault()

    setError(null)

    if (!name || !price || !description){
      setError("Debes completar todos los campos")
      return
    }

    const newProduct ={
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: category,
      image: image
     }

    const response =  await fetch("https://fakestoreapi.com/products", 
      {method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()

     setProduct(data) 

     setName("")
     setPrice("")
     setDescription("")
     setCategory("")
     setImage("")

  }
    return (
        <Layout>
            <h1>Agrega nuevos productos</h1>

            
            <section className="container">
              <form  onSubmit={handleSubmit}>

                  <label> Nombre del producto:
                    <input type="text" name="nombre" onChange={(e) => setName(e.target.value)} value={name} />
                  </label>

                  <label> Precio del producto:
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                  </label>
      
                  <label> Categoria:
                    <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} value={category} />
                  </label>
      

                  <label> URL de la imagen:
                    <input type="text" name="image" onChange={(e) => setImage(e.target.value)} value={image} />
                  </label>

                  <label> Descripcion :
                    <textarea name="description"  rows="4" onChange={(e) => setDescription(e.target.value)} value={description}> </textarea>
                  </label>
                <div>
                  <button className="btn"> Guardar producto</button>
                </div> 

              </form>
              <section className="new-product">
              {
                    product && <div>
                      <h2>{product.title}</h2>
                      <img src={product.image} alt={`imagen de ${product.title}`}/>
                      <p><strong>${product.price}</strong></p>
                      <p>{product.category}</p>
                      <p>{product.description}</p>
                    </div>
                  }   

              </section>
              {

              error && <p className="texto-error">{error}</p>
              } 
            </section>

           

 
   </Layout>
    )
}

export {  Dashboard }