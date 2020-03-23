import React from 'react'
import { newEmployee } from '../services/dummyApi'

export const NewEmployee = () => {


    const [putEmployees, setEmployee] = useState([])


    const setNewEmployee = (name, salary, age) => {

        putEmployees(name, salary, age).then(({ data }) => setEmployee(data))
    }

    const name = document.querySelector('#name')
    const salary = document.querySelector('#salary')
    const age = document.querySelector('#age')
    return (
        <div>

            <input type='text' placeholder='Name' id='name' />
            <input type='number' placeholder='Salary' id='salary' />
            <button onClick={() => setNewEmployee(name.value, salary.value, age.value)}>
                Click</button>
            <br></br>
        </div>
 
}