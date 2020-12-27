import React, {useEffect, useState} from 'react';
import './App.css';
import ProductList from './components/product-list'
import ProductDetails from './components/product-detail'
import ProductForm from './components/form-product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {useCookies} from 'react-cookie';



function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setselectedProduct] = useState(null);
  const [editedProduct, seteditedProduct] = useState(null);
  const [token, setToken, deleteToken] = useCookies(['mr-token']);
  useEffect(()=>{
    fetch(
      "http://localhost:8000/api/products/", {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token['mr-token']}`
        }
      })
      .then(resp => resp.json())
      .then(resp => setProducts(resp))
      .catch(error => console.log(error))
  }, [])

  useEffect (() => {
    console.log(token);
    if (!token['mr-token']) window.location.href = '/'
  }, [token])

  
  const loadProduct = product => {
    setselectedProduct(product)
    seteditedProduct(null)
  }

  const editClicked = product => {
    seteditedProduct(product)
    setselectedProduct(null)
    
  }

  const updateProduct2 = product => {
    const newProduct = products.map(prod =>{
      if (prod.id === product.id){
        console.log(product)
        return product
      }
      return prod
    })
    setProducts(newProduct)
  }
  console.log(editedProduct)


  const newProduct = () => {
    seteditedProduct({manufacturer: '', name: '', description: '', group: ''})
    setselectedProduct(null)
  } 

  const ProductCreated = product => {
    const newProducts= [...products, product];
    setProducts(newProducts);
  }
  
  const removeClicked = product => {
    const newProducts = products.filter(prod =>{
      if (prod.id ===product.id){
        return false
      }
      return true
    })
    setProducts(newProducts)
  }

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lavoura certa</h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
        
      </header>
      <div className="layout">
          <div>
            <ProductList 
              products={products} 
              productClicked={loadProduct} 
              editClicked={editClicked}
              removeClicked={removeClicked}/>
            <button onClick={newProduct}>Novo Produto</button>
          </div>
          
          <ProductDetails product={selectedProduct} updateProduct={loadProduct}/>
          {editedProduct ? <ProductForm product={editedProduct} updateProduct2={updateProduct2} ProductCreated={ProductCreated}/>: null}
          
      </div>
    </div>
  );
}

export default App;
