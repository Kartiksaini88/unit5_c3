import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Authcontext";

export const Login = () => {
  //  use reqres to log user in.
  let {auth , login} = useContext(AuthContext)


  let navigate = useNavigate()
  let handlechng = (e)=>{

    login({
        ...login,
        [e.target.name]:[e.target.value],
    
    })
}
let submitdata = (event)=>{
  event.preventDefault()
     auth.status = true
     console.log(auth)
    setalldata()
    navigate(-2 , {replace:true})

}
let setalldata =async ()=>{
  try {
    let res = await fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(auth)
    })
  } catch (error) {
    console.log(error)
  }
}

  return (
    <form className="loginform" onSubmit={submitdata}>
      <input
      onChange={handlechng}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        onChange={handlechng}
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input  type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
