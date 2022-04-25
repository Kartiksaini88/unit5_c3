import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
   let [auth , login] = useState({
    email :"",
    password:"",
    status:false,
   })



    return <AuthContext.Provider value={{auth,login}}>{children}</AuthContext.Provider>
}