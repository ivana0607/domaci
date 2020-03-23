import React from 'react'

export const Employee = ({ employee }) => {
    return (
        <div>
            <h3> Name : {employee.employee_name}</h3>
            <p> Age : {employee.employee_age}  -  Salary : {employee.employee_salary} Eur</p>

        </div>
    )
}