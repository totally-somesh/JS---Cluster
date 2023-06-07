import axios from 'axios';

const baseURL = "http://localhost:3002";

class EmployeeService {

getEmployees(){

    return axios.get(baseURL + "/employees");
}

addEmp(emp){

    return axios.post(baseURL + "/employee/employee/"+emp.empid,emp);
}

empUpdation(emp){

    return axios.put(baseURL + "/employee/employee/"+emp.empid,emp)
}

deleteEmp(id){

    return axios.delete(baseURL + "/employee/employee/"+id)

}


}

export default new EmployeeService() ;
