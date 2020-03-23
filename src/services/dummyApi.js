import axios from 'axios'

export const baseUrl = `http://dummy.restapiexample.com/api/v1`


export const getEmployee = () => {
    return axios.get(`${baseUrl}/employees`)
}

export const newEmployee = (name, salary, age) => {
    return axios.post(`${baseUrl}/create`, { "name": `${name}`, "salary": `${salary}`, "age": `${age}` }).then(({ data }) => {
        return data
    })
}