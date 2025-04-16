import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const {user,dispatch} = useAuthContext()
    const handleLogin = async (e) => {  
        e.preventDefault();  
        setError(null); 
        
        try {  
            const response = await fetch('http://localhost:4000/api/users/login', {  
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify({ email, password }),
            });  
            const res = await response.json();  
            if (!response.ok) {  
                throw new Error(res.error); 
            }else{
                dispatch({ type: "login", payload: res }); 
            }
        } catch (error) {  
            setError(error.message); 
        }  
    

    }
  return (
    <form onSubmit={handleLogin}>
        <input type="text" placeholder='email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button>login</button>
        {error && <div>{error}</div>}
    </form>
  )
}

export default Login