import { useContext } from "react";
import { Link } from "react-router-dom";
import { TotalEm } from "./context/TotalEm";

export const EmployeeList = () => {
 let {Alldata} = useContext(TotalEm)
//  console.log(Alldata)
 
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {Alldata.map(e=><Link to={`/employees/${e.id}`}><div className="employee_card">
        <img  src={e.image} className="employee_image" />
        <br/>
        <span className="employee_name">{e.employee_name}</span>
        <br/>
        <span className="employee_title">{e.title}</span>
      </div>
      </Link>)}
    </div>
  );
};
