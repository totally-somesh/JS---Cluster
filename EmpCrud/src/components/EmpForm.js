import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmployeeService from '../service/EmployeeService';

const EmpForm = (props) => {

    let navigate = useNavigate();

    let [formDetails, setformDetails] = useState({empid:"",ename:"",sal:""});

    let insertEmp = () => {

        EmployeeService.addEmp(formDetails)
        .then((result) => {

            console.log(result);
            setformDetails({empid:"",ename:"",sal:""});
            navigate("/table");

        })
        .catch((err) => {console.log(err)})

    } //end of insertEmp function

    return(

        <div>

<form>
  <div className="form-group">
    <label htmlFor="empid">Player ID</label>
    <input
      type="text"
      className="form-control"
      id="empid"
      name="empid"
      value={formDetails.empid}
      onChange={(event)=>{setformDetails({...formDetails,empid:event.target.value})}}
      readonly 
    />
  </div>
  <div className="form-group">
    <label htmlFor="ename">Player Name</label>
    <input
      type="text"
      className="form-control"
      id="ename"
      name="ename"
      value={formDetails.ename}
      onChange={(event)=>{setformDetails({...formDetails,ename:event.target.value})}}
    />
  </div>
  <div className="form-group">
    <label htmlFor="sal">Player Salary</label>
    <input
      type="text"
      className="form-control"
      id="sal"
      name="sal"
      value={formDetails.sal}
      onChange={(event)=>{setformDetails({...formDetails,sal:event.target.value})}}
    />
  </div>
  

  <button type="button" className="btn btn-primary" onClick={() => {insertEmp()}}>
    Submit Information  
  </button>
</form>


        </div>
    )
} 

export default EmpForm;