import React, { useState, useEffect } from 'react'
import { getEmployee } from '../services/dummyApi'
import { Employee } from './Employee'


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [select, setSelect] = useState(5)
    // const [count, setCount] = useState(7)


    useEffect(() => {
        getEmployee().then(res => setEmployees(res.data.data))
    }, [])

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    return (
        <>
            <header><h1 style={{ color: "gray", textAlign: "center" }}>Welcome to Our Company</h1></header>
            <div className="select">
                <select id="number" value={select} onChange={(e) => handleSelect(e)}>
                    <option value="5" >Choose 5</option>
                    <option value="15"> Choose more</option>
                    <option value="25">Choose all</option>
                </select>
            </div>

            <div className="employee-list">
                {employees.slice(0, select).map(employee =>
                    <Employee key={employee.id} employee={employee} />)}

            </div>

            {/* {employees.slice(0, count).map(employee =>
                <Employee key={employee.id} employee={employee} />)}
            <br></br>
            <button style={{
                padding: 8,
                textAlign: "center",
                cursor: "pointer",
                fontSize: 12,
            }} onClick={() => setCount(count + 10)}>Show more</button> */}


        </>
    )
}