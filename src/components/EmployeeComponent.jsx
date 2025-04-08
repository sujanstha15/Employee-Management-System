import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {...errors};

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }
        else{
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }   
        else{
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()){            
            errorsCopy.email = '';
        }
        else{
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }
//this supports both add employee and update employee operation
    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email};
            console.log(employee);
            //let's write the logic to support update employee operation 

            if(id){
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                });
            }
            
            else{
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error('Error creating employee:', error);
                });
            }
            }
         
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>FirstName</label>
                                <input 
                                    type="text"
                                    placeholder='Enter employee FirstName'
                                    name='firstName' 
                                    value={firstName} 
                                    className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`} 
                                    onChange={handleFirstName}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter employee Last Name' 
                                    name='lastName' 
                                    value={lastName} 
                                    className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`} 
                                    onChange={handleLastName}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input 
                                    type="text"
                                    placeholder='Enter employee Email'
                                    name='email' 
                                    value={email} 
                                    className={`form-control ${ errors.email ? 'is-invalid' : ''}`}
                                    onChange={handleEmail}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}  >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent;