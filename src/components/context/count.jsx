import { createContext, useState } from "react";

export const CountContext = createContext()

export const CountContextProvider = ({children}) =>{
   let [count , setcount] = useState(0)


   let handle = (value)=>{
       setcount(count + 1)
   }



    return <CountContext.Provider value={{count,setcount}}>{children}</CountContext.Provider>
}