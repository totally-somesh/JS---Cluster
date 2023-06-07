import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeaderNavBar from './components/MainHeaderNavBar';
import EmployeeTable from './components/EmployeeTable';
import EmpForm from './components/EmpForm';
import EmpEdit from './components/EmpEdit';

import HomeComponent from './components/HomeComponent';

function App(){

  return (
    <div>

        <MainHeaderNavBar></MainHeaderNavBar>
        <Routes>
          <Route path="/home" element={<HomeComponent/>}></Route>
          <Route path="/table" element={<EmployeeTable/>}></Route>
          <Route path="/form" element={<EmpForm/>}></Route>
          <Route path="/edit/:eid" element={<EmpEdit/>}></Route>
        </Routes>
        
    </div>
  )
} 

export default App;
