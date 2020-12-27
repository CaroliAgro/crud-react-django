

export class API {

  static updateProduct(prod_id, body, token) {
    return fetch(
      `http://localhost:8000/api/products/${prod_id}/`, {
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
      
      
  }
  static createProduct(body, token) {
    return fetch(
      `http://localhost:8000/api/products/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
         
  }

  static deleteProduct(prod_id, token) {
    return fetch(
      `http://localhost:8000/api/products/${prod_id}/`, {
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${token}`
        },
        
      })  
  }
  static loginUser(body) {
    return fetch(
      `http://localhost:8000/api-token-auth/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
      
      
  }
  static registerUser(body) {
    return fetch(
      `http://localhost:8000/users/register/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
      
      
  }
}