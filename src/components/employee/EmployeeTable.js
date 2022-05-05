import React from "react";
import {Button, Input, InputGroupText} from "reactstrap";
import {Link} from "react-router-dom";
import EmployeeModal from "./EmployeeModal";


const EmployeeTable = ({handleDelete, employee, changeCheckBox,handleUpdate, handleAdd}) => {

    return (
        <>
            {employee.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <Input type="checkbox" name={item.name} checked={item.isChecked || false}  onChange={changeCheckBox}/>
                        </td>
                        <td>{item.id}</td>
                        <td><Link to={`calendar/${item.id}`}>{item.name}</Link></td>
                        <td>{item.gmail}</td>
                        <td>{item.address}</td>
                        <td>
                            <EmployeeModal title='Edit' employee={item} handleUpdate={handleUpdate} handleAdd={handleAdd}/>
                            <Button outline color="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                        </td>
                    </tr>
                )
            })}
        </>
    );
}

export default EmployeeTable