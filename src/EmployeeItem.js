import React  from 'react'

const EmployeeItem = (props) => {
    const {name , designation , skills,contact , type , date , id , data} = props

    

    return(
        <div>
        <h2>Employee : #{id} </h2>
        <h2>Name : {name} </h2>
        <h2>Designation : {designation}</h2>
        <h2>Contact : {type} - {contact}</h2>
        <h2>Skills : {skills}</h2>
        <h2>Date Of Birth : {date}</h2>
        <hr/>
        </div>
    )
}
export default EmployeeItem