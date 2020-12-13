const TOKEN = "7b4b5fd55064659da3276af314d66d08e8dd31a5"

export class API {
  static updateProduct(prod_id, body) {
    return fetch(
      `http://localhost:8000/api/products/${prod_id}/`, {
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${TOKEN}`
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
      
      
  }
  static createProduct(body) {
    return fetch(
      `http://localhost:8000/api/products/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${TOKEN}`
        },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
         
  }

  static deleteProduct(prod_id) {
    return fetch(
      `http://localhost:8000/api/products/${prod_id}/`, {
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Token ${TOKEN}`
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
}