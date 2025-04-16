import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const UseSignup = () =>{
    const [error ,setError] = useState(null)
    const [isLoading , setIsLoading ] = useState(false)
    const {dispatch} = useAuthContext()
    const signup = async (email,password,option)=>{
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost:4000/api/users/'+option,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
                
            })
            const res = await response.json()
            if(!response.ok){
                console.log(res.error)
                throw Error(res.error)
            }else{
                localStorage.setItem('user',JSON.stringify(res))
                dispatch({type: "signup",payload: res})
                setIsLoading(false)
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return {signup , error , isLoading}
}