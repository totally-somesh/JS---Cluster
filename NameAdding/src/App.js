import React,{ component } from "react";
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from "./components/EmployeeTable";

class App extends React.Component{

constructor(props){
super(props);

this.state = {
  arr : ["MS Dhoni","Virat Kohli"]
}
} // end of constructor

addName = (nm) => {
  this.setState({...this.state, arr:[...this.state.arr,nm]});
}

render(){


  return (

    <div>

      <h1>Indian Cricket Team</h1>

      <EmployeeTable empdata={this.state.arr} insertEmp={this.addName} />

    </div>
  ) //end of return

} //end of render

} // end of class

export default App;
