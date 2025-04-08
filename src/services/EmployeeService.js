import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

//we have written REST client code to call update employee REST API using axios.put method

export const updateEmployee = (employee, id) => axios.put(REST_API_BASE_URL + '/' + id, employee);