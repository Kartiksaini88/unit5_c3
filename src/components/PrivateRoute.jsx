import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./context/Authcontext"

export const ProtectedRoute=({children})=>{
let {auth} = useContext(AuthContext)
console.log(auth)

if(!auth.status){
    return <Navigate to={"/login"} replace={false}></Navigate>
}
return children

}