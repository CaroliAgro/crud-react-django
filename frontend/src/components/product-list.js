import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ProductList(props){


  const productClicked = product => evt => {
    props.productClicked(product)

  }

  const editClicked = product => {
    props.editClicked(product);

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
              <FontAwesomeIcon icon={faTrash} />
            </div>
            ) 
            
        })} 
      </div>
    </div>
  )
}

export default ProductList