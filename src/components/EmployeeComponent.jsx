import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'


const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    // state varibles are above

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

    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email};
        console.log(employee);

       createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator('/employees');
       })
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
                        <input type="text" placeholder='Enter employee FirstName' name='firstName' value={firstName} className='form-control' onChange={handleFirstName}/>
                    </div>

                    {/* Last Name Comment */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name:</label>
                        <input type="text" placeholder='Enter employee Last Name' name='lastName' value={lastName} className='form-control' onChange={handleLastName}/>
                    </div>
                    {/* Email */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email: </label>
                        <input type="text" placeholder='Enter employee Email' name='email' value={email} className='form-control' onChange={handleEmail}/>
                    </div>
                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>

        </div>

        </div>






    </div>
  )
}

export default EmployeeComponent;