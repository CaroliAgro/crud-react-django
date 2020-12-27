import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import {useCookies} from 'react-cookie'

function ProductDetails(props){
  const [highligted, setHighligted] = useState(-1);
  const [token] = useCookies(['mr-token'])
  
 
  
  let prod = props.product

  const highlightRate = high => evt => {
    setHighligted(high);
  }
  const rateClicked = rate => evt => {
    fetch(
      `http://localhost:8000/api/products/${prod.id}/check_risk/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token['mr-token']}`
        },
        body: JSON.stringify({risk: rate + 1})
      })
      .then(() => getDetails())
      .catch(error => console.log(error))
  }

  const getDetails = () =>{
    fetch(
      `http://localhost:8000/api/products/${prod.id}/`, {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token['mr-token']}`
        },
        
      })
      .then(resp => resp.json())
      .then(resp => props.updateProduct(resp))
      .catch(error => console.log(error))}
  
  return(
    <React.Fragment>
      {prod ? (
        <div>
          <h1>{prod.description}</h1>
          <FontAwesomeIcon icon={faSkull} className={prod.risk>0 ? "orange": '' }/>
          <FontAwesomeIcon icon={faSkull}  className={prod.risk>1 ? "orange": '' }/>
          <FontAwesomeIcon icon={faSkull} className={prod.risk>2 ? "orange": '' }/>
          <FontAwesomeIcon icon={faSkull} className={prod.risk>3 ? "orange": '' }/>
          <FontAwesomeIcon icon={faSkull} className={prod.risk>4 ? "orange": '' }/>
        
        <div className="rate-container">
          <h2>Risco</h2>
          {[...Array(5)].map((e,i)=>{
            return <FontAwesomeIcon key={i}icon={faSkull} className={highligted> i-1 ? "purple": '' }
                    onMouseEnter={highlightRate(i)}
                    onMouseLeave={highlightRate(-1)}
                    onClick={rateClicked(i)}

          />
          })}
        </div>  
        </div>
        
      ) : null}
    </React.Fragment>
  )
}

export default ProductDetails;