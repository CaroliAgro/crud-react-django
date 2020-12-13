import React, {useState} from 'react';
import {API} from '../api-service';


function Auth(){ 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginCliked = () => {
    API.loginUser({email,username, password})
    .then(resp=>console.log(resp.token))
    .catch(error=>console.log(error))
  }
  return (
    <div>
        <label htmlFor="email">Email</label><br/>
        <input id="email" type="text" placeholder="email" value={email}
          onChange={evt =>setEmail(evt.target.value)}
        /><br/>
        <label htmlFor="username">username</label><br/>
        <input id="username" type="text" placeholder="username" value={username}
          onChange={evt =>setUsername(evt.target.value)}
        />
          
        <br/>
        <label htmlFor="password">password</label><br/>
        <input id="password" type="password" placeholder="password" value={password} onChange={evt =>setPassword(evt.target.value)}/>><br/>
        
      
        <button onClick={loginCliked}>Login</button> 
        
      
      
    </div>
  )
}

export default Auth