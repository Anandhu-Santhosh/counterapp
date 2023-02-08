import React from 'react'
import './Employee.css'
function Employee() {
    const employee=[
        {'username':'Akash','Designation':'Tester'},
        {'username':'Arun','Designation':'Developer'},
        {'username':'Amal','Designation':'Tester'},
        {'username':'Akhil','Designation':'Developer'},
    ]
  return (
    <div>
        
            <h3>Employee Details</h3>
           { employee.map(item=>(
                <div>
                    Username: {item.username}
                    <br/>
                    Designation: {item.Designation}
                </div>
            ))
        }        
    </div>
  )
}

export default Employee