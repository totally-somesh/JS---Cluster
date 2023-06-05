import { useState } from "react";

const EmployeeTable = (props) => {

let [myname,setmyname] = useState("");

let addNewName = () => {

    props.insertEmp(myname);
} //end of addNewName

let renderTable = props.empdata.map((name,index) => <tr key={index}><td>{name}</td></tr>)

return (

    <div>
        <input type="text" name="txt" id="txt" 
        value={myname}
        onChange = {(event) => {setmyname(event.target.value)}}        
        />

        <button type="button" onClick={addNewName}>Add New Player</button>

        <table>

            <thead>
                <tr>
                    <th>Player Name</th>
                </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </table>
    </div>
) // end of return
} //end of EmployeeTable function

export default EmployeeTable