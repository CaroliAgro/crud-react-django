import React, {useState, useEffect} from 'react';
import {API} from '../api-service';

function ProductForm(props){
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('')
  const [description, setDescription] = useState('')
  const [group, setGroup] = useState('')
  
  useEffect (() =>{
    setName(props.product.name)
    setManufacturer(props.product.manufacturer)
    setDescription(props.product.description)
    setGroup(props.product.group)
  }, [props.product])


  const  updateCliked = () => {
    console.log('updade aqui')
    API.updateProduct(props.product.id, {manufacturer, name, description, group })
    .then(resp => props.updateProduct2(resp))
    .catch(error => console.log(error))

  }

  const  createCliked = () => {
    console.log('updade aqui')
    API.createProduct({manufacturer, name, description, group })
    .then(resp => props.ProductCreated(resp))
    .catch(error => console.log(error))

  }
  return (
    <React.Fragment>
      {props.product ? (
      <div>
        <label htmlFor="name">Name</label><br/>
        <input id="name" type="text" placeholder="name" value={name}
          onChange={evt =>setName(evt.target.value)}
        />
        <input id="manufacturer" type="text" placeholder="manufacturer" value={manufacturer}
          onChange={evt =>setManufacturer(evt.target.value)}
        />
          
        <br/>
        <label htmlFor="description">Descrição</label><br/>
        <textarea id="description" type="text" placeholder="description" value={description} onChange={evt =>setDescription(evt.target.value)}></textarea><br/>
        <input id="group" type="text" placeholder="group" value={group}
          onChange={evt =>setGroup(evt.target.value)}
        />
        {props.product.id ?
        
        <button onClick={updateCliked}>Update</button> :
        <button onClick={createCliked}>Create</button>
      
      }
      </div>
      ) : null }
    </React.Fragment>
  )
}

export default ProductForm;