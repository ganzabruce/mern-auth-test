import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const UseAuthContext = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error('authcontext must be provided in the useAuthContext')
    }
    return context
} 