import axios from "axios";

const REST_API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/employees`;

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (EmployeeId) => axios.get(`${REST_API_BASE_URL}/${EmployeeId}`);

export const updateEmployee = (EmployeeId, employee) => axios.put(`${REST_API_BASE_URL}/${EmployeeId}`, employee);

export const deleteEmployee = (EmployeeId) => axios.delete(`${REST_API_BASE_URL}/${EmployeeId}`);
