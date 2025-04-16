import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error('authcontext must be provided in the useAuthContext')
    }
    return context
} 