import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const EmployeeModal = ({title, employee, handleUpdate, handleAdd}) => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [address, setAddress] = useState([])
    
    const infoEmployee = {name, email, address}
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return (
        <>
            <Button color="warning" onClick={toggle}>{title}</Button>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>{title} Employee</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Name
                            </Label>
                            <Input id="exampleEmail" name="name" value={employee?.name} placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input id="exampleEmail" name="email" value={employee?.gmail} placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Address
                            </Label>
                            <Input id="exampleEmail" name="address" value={employee?.address} placeholder="Address" type="text" onChange={(e) => setAddress(e.target.value)}/>
                        </FormGroup>
                        {title === 'Add' ? (
                            <Button color="primary" onClick={() => handleAdd(infoEmployee)}>
                                {title}
                            </Button>
                        ) : (
                            <Button color="primary" onClick={() => handleUpdate(infoEmployee, employee?.address)}>
                                {title}
                            </Button>
                        )
                        }
                        
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
export default EmployeeModal