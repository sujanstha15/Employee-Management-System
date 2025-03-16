import React from 'react'

const ListEmployeeComponent = () => {


    const dummyData = [
       {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe", 
        "email": "johndoes@gmail.com"
       },
         {
          "id": 2,
          "firstName": "Alex",
          "lastName": "Smith", 
          "email": "smithalex23@gmail.com"    
            },

            {
              "id": 3,
              "firstName": "Steve",
              "lastName": "Smith", 
              "email": "steve@gmail.com"
            }
        
    ]


  return (
    <div className='container'>

        <h2 className='text-center'>Employees List</h2>
        <table className='table table-striped table-bordered'> 
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )
                }
                
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent