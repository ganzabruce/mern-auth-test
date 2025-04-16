import React, { useState } from 'react'
import { UseSignup } from '../hooks/useSignup'


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup , error , isLoading} = UseSignup()

    const clearInputs = ()=>{
      setEmail('')
      setPassword('')
    }

    const handleLogin = async (e) => {  
        e.preventDefault();  
        const option = 'login'
        signup(email,password,option)
        clearInputs()
    }
  return (
    <form onSubmit={handleLogin}>
        <input type="text" placeholder='email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button disabled={isLoading}>login</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login