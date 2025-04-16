import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
const Signup = () => {
    const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [error,setError] = useState(null)
        const {user,dispatch} = useAuthContext()
        const handleSignup = async (e)=>{
            e.preventDefault()
            const data = {email, password}
            console.log(data)
            try {
                const response = await fetch('http://localhost:4000/api/users/signup',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                    
                })
                if(!response.ok){
                    const res = await response.json()
                    console.log(res.error)
                    throw Error(res.error)
                }
                if(response.ok){
                    const res = await response.json()
                    dispatch({type: "signup",dispatch: res})
                }
            } catch (error) {
                setError(error.message)
            }
    
        }
  return (
    <>
    <form onSubmit={handleSignup}>
        <input type="text" placeholder='email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button>Signup</button>
    </form>
    <h1>
        {error && <div>{error}</div>}

    </h1>
    </>
  )
}

export default Signup