import React, {useState, useEffect} from 'react';
import {API} from '../api-service';
import {useCookies} from 'react-cookie';

function Auth(){ 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);
  const [token, setToken] = useCookies(['mr-token']);

  useEffect (() => {
    console.log(token);
    if (token['mr-token']) window.location.href = '/products'
  }, [token])
  const loginCliked = () => {
    API.loginUser({email,username, password})
    .then(resp=>setToken('mr-token', resp.token))
    .catch(error=>console.log(error))
  }

  const registerCliked = () => {
    API.registerUser({email,username, password})
    .then(()=>loginCliked())
    .catch(error=>console.log(error))

  }
  return (
    <div>
        {isLoginView ? <h1>Login</h1> : <h1>Register</h1> }
        
        <label htmlFor="email">Email</label><br/>
        <input id="email" type="text" placeholder="email" value={email}
          onChange={evt =>setEmail(evt.target.value)}
        /><br/>
        <label htmlFor="username">username</label><br/>
        <input id="username" type="text" placeholder="username" value={username}
          onChange={evt =>setUsername(evt.target.value)} /><br/>
        <br/>
        <label htmlFor="password">password</label><br/>
        <input id="password" type="password" placeholder="password" value={password} onChange={evt =>setPassword(evt.target.value)}/>><br/>
        
        { isLoginView ? 
          <button onClick={loginCliked}>Login</button>:
          <button onClick={registerCliked}>Registre</button>
          }
          
        
        { isLoginView ? 
          <p onClick={()=>setIsLoginView(false)}>Você não tem uma conta? Registre aqui</p> : 
          <p onClick={()=>setIsLoginView(true)}>Você já tem uma conta. Faça login</p> 
        }
        
        
        
      
      
    </div>
  )
}

export default Auth