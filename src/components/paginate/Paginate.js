import React from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const Paginate = ({showData, paginate, total}) => {
    
    const arrayPage = []
    for(let i = 1; i <= Math.ceil(total/showData); i++){
        arrayPage.push(i)
    }
    
    return (
        <>
            <Pagination aria-label="Page navigation example">
                {arrayPage.map((number, index) => {
                    return (
                        <PaginationItem key={index}>
                            <PaginationLink onClick={() => paginate(number)}>
                                {number}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
            </Pagination>
        </>
    )
}

export default Paginate