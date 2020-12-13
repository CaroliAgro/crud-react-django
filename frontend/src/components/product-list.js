import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api-service'


function ProductList(props){


  const productClicked = product => evt => {
    props.productClicked(product)

  }

  const editClicked = product => {
    props.editClicked(product);

  }

  const removeClicked = product => {
    API.deleteProduct(product.id)
    .then(() => props.removeClicked(product))
    .catch(error => console.log())
    

  }


  return(
    <div>
      Lista de Produtos
      <div>
        
        {props.products && props.products.map(product=>{
          return (
            <div key={product.id} className="product-item">
              <h2 onClick={productClicked(product)}>{product.name}</h2>
              <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(product)} />
              <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(product)} />
            </div>
            ) 
            
        })} 
      </div>
    </div>
  )
}

export default ProductList