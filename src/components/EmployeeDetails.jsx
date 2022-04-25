import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {

  let { id } = useParams()

  let [homedatas, sethomed] = useState([])
  console.log(homedatas)
  useEffect(() => {
      homedata()
  }, [])
// console.log(homedatas)
  let homedata = async () => {
      try {
          let res = await fetch(`http://localhost:8080/employee/${id}`)
          let data = await res.json()
         
          let hoemd = [data]
          sethomed(hoemd)

      } catch (error) {
          console.log(error)
      }
  }



  return (
    <div>{homedatas.map(e=><div className="user_details">
    <img className="user_image" src={e.image}/>
    <h4 className="user_name" >{e.employee_name}</h4>
    <span className="user_salary">${e.salary}</span>
    <span className="tasks">
      <li className="task">{e.tasks[0]}</li>
    </span>
    Status: <b className="status"></b>
    Title: <b className="title"></b>
    {/* Show this button only if user is not already terminated (users status is working) */}
    <button className="fire">Fire Employee</button>
    {/* Show this button only if user is not already team lead or terminated */}
    <button className="promote">promote</button>
  </div>)}</div>
 
  );
};
