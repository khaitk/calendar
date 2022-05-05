import React from "react";
import {Routes, Route} from "react-router-dom";
import Calendar from "./Calendar";
import Employee from "./Employee";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Employee />} />
                <Route path="calendar/:id" element={<Calendar />} />
            </Routes>
        </>
    )
}
export default App