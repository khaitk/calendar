import React, {useState} from "react";
import EmployeeModal from "../components/employee/EmployeeModal";
import {Button, Input, Table} from "reactstrap";
import EmployeeTable from "../components/employee/EmployeeTable";
import Paginate from "../components/paginate/Paginate";

const Employee = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [showData, setShowData] = useState(4)
    const lastPage = currentPage * showData
    const firstPage = lastPage - showData
    
    const [employee, setEmployee] = useState([
        {id : 1, name : 'Khai TK', gmail : 'khaitkfa@gmail.com', address : 'Quảng Trị'},
        {id : 2, name : 'Hạ My', gmail : 'hamy@gmail.com', address : 'Quảng Ngãi'},
        {id : 3, name : 'Thảo Nguyên', gmail : 'thaonguyen@gmail.com', address : 'Quảng Ninh'},
        {id : 4, name : 'Khai Dev', gmail : 'khaitkfa@gmail.com', address : 'Quảng Trị'},
        {id : 5, name : 'Hạ Nguyên', gmail : 'hamy@gmail.com', address : 'Quảng Ngãi'},
        {id : 6, name : 'Thảo My', gmail : 'thaonguyen@gmail.com', address : 'Quảng Ninh'},
        {id : 7, name : 'Khai Py', gmail : 'khaitkfa@gmail.com', address : 'Quảng Trị'},
        {id : 8, name : 'Hạ Thu', gmail : 'hamy@gmail.com', address : 'Quảng Ngãi'},
        {id : 9, name : 'Thảo Phương', gmail : 'thaonguyen@gmail.com', address : 'Quảng Ninh'},
    ])
    
    const currentData = employee.slice(firstPage, lastPage)
    const paginate = (number) => setCurrentPage(number)
    
    const changeCheckBox = (event) => {
        const data = event.target
        
        if(data.name === 'all') {
            let employeeItem = employee.map((employee) => {
                return {...employee, isChecked : data.checked}
            });
            setEmployee(employeeItem)
        }
        else{
            let employeeItem = employee.map((employee) => {
                if(employee.name === data.name){
                    return {...employee, isChecked : data.checked}
                }else{
                    return employee
                }
            })
            setEmployee(employeeItem)
        }
    }
    
    const checkValue = (arrData) => {
        return arrData.filter((arr) => arr?.isChecked !== true).length < 1
    }
    
    const handleAdd = (infoEmployee) => {
        console.log(infoEmployee)
    }
    
    const handleUpdate = (id) => {
        console.log(id)
    }
    
    const handleDelete = (id) => {
        console.log(id)
    }
    
     return (
       <>
           <EmployeeModal title='Add' />
           <Button color="danger" disabled={!checkValue(employee)}>Delete</Button>
           <Table responsive hover>
               <thead>
               <tr>
                   <th>
                       <Input type="checkbox" name="all" checked={checkValue(employee)} onChange={changeCheckBox} />.
                   </th>
                   <th> #</th>
                   <th>Name</th>
                   <th>Gmail</th>
                   <th>Address</th>
                   <th>Action</th>
               </tr>
               </thead>
               <tbody>
                    <EmployeeTable employee={currentData} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} changeCheckBox={changeCheckBox}/>
               </tbody>
           </Table>
           <Paginate total={employee.length} showData={showData} paginate={paginate}/>
       </>
    );
}

export default Employee