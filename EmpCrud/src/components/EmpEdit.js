import { useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeService from "../service/EmployeeService";

const EmpEdit = (props) =>{

    let location = useLocation();
    let navigate = useNavigate();

    let [formDetails, setformDetails] = useState({empid:"",ename:"",sal:""});

useEffect(()=>{

    setformDetails({...location.state.emp});

},[])

let updateEmp = () =>{

  console.log("Inside updateEmp ()");
    EmployeeService.empUpdation(formDetails)
    .then(() => {

        navigate("/table");
    })
    .catch((err) => {console.log("Error Occurred : " +err)})
}  

return (

    <div>
        <form>
                    <div className="form-group">
                        <label htmlFor="empid">Employee id</label>
                        <input type="text" className="form-control" id="empid" name="empid" 
                         value={formDetails.empid}
                         onChange={(event)=>{setformDetails({...formDetails,empid:event.target.value})}}   
                         readOnly
                        />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="ename">Employee Name</label>
                        <input type="text" className="form-control" id="ename" name="ename"
                        value={formDetails.ename}
                         onChange={(event)=>{setformDetails({...formDetails,ename:event.target.value})}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sal">Employee Sal</label>
                        <input type="text" className="form-control" id="sal" name="sal"
                        value={formDetails.sal}
                         onChange={(event)=>{setformDetails({...formDetails,sal:event.target.value})}}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={updateEmp}>Update Employee</button>
           </form>

    </div>

)

}

export default EmpEdit;