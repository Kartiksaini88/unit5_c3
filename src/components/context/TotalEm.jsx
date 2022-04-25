import { createContext, useContext, useEffect, useState } from "react";

// terminated: 0, // inc when user in terminated
// //   promoted: 0,// inc when user in promoted
// //   total_new: 0

export const TotalEm = createContext()

export const TotalEmProvider = ({children})=>{
    let [Alldata , setdata] = useState([])
    // let [Count ,setcount] = useState() 

    useEffect(()=>{
        fectem()
    },[])
   
    let fectem = async()=>{
     try {
         let res = await fetch("http://localhost:8080/employee")
         let data = await res.json()
         
         setdata(data)
     } catch (error) {
         console.log(error)
     }
    }
    return <TotalEm.Provider value={{Alldata}}>{children}</TotalEm.Provider>
}