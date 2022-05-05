import React from "react";
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const EmployeeInfo = () => {
    return (
        <Card>
            <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
            />
            <CardBody>
                <ListGroup className="pb-3">
                    <ListGroupItem>
                        <b>Name Employee</b>
                    </ListGroupItem>
                    <ListGroupItem>
                        <b>Gmail@gmail.com</b>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="justify-content-between">
                        <h6>
                            Doing{' '}
                            <Badge color="primary">
                                14
                            </Badge>
                        </h6>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <h6>
                            Done{' '}
                            <Badge color="success">
                                2
                            </Badge>
                        </h6>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <h6>
                            Cancel{' '}
                            <Badge color="danger">
                                1
                            </Badge>
                        </h6>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
            <Link to='/' className="btn btn-danger p-2">Back</Link>
        </Card>
    )
}
export default EmployeeInfo