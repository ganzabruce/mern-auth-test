import React, { useState } from 'react'
import { UseSignup } from '../hooks/useSignup'
const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { signup ,error , isLoading} = UseSignup()
    const handleSignup = async (e)=>{
        e.preventDefault()
        const data = {email, password}
        const option = 'signup'
        await signup(email,password,option)
        }
  return (
    <>
    <form onSubmit={handleSignup}>
        <input type="text" placeholder='email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button className={isLoading}>Signup</button>
    </form>
    <h1>
        {error && <div>{error}</div>}

    </h1>
    </>
  )
}

export default Signup