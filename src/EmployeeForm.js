import React , {useState} from 'react'
import './App.css'

const EmployeeForm = (props) => {
  const {addItems ,data} = props
  const [id , setId] = useState("")
  const [name , setName] = useState('')
  const [designation , setDesignation] = useState('')
  const [contact , setContact] = useState('')
  const [type , setType] = useState('')
  const [skills , setSkills] = useState('')
  const [date , setDate] = useState('')
  const [forms , setForms] = useState({})
  const errors = {}
  const phoneNumbers = []

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeDesignation = (e) => {
    setDesignation(e.target.value)
  }
  const changeContact = (e) => {
    setContact(e.target.value)
  
  }

  const addPhoneNumber =(e)=>{
    e.preventDefault()
    if(type && contact){
      let r = {
        "type" : type,
        "number" : contact 
      }
      if(phoneNumbers.length > 4){
        alert(`Maximum four numbers can be entered`)
      }else {
        phoneNumbers.push(r)
      }
    }
    
    
  }

  const changeType = (e) => {
    setType(e.target.value)
  }
  const changeSkills =(e) => {
    setSkills(e.target.value)
  }
  const changeDate = (e) => {
    setDate(e.target.value)
  }
  
  const runValidations = () => {
    if(name.trim().length === 0) {
      errors.userName = 'name cannot be blank'
  } else if(name.trim().length < 5) {
      errors.name = 'name should have more than 5 characters'
  }

  if(contact.trim().length > 10){
    errors.contact = "phone number should not be more than 10"
  }else if(contact.trim().length < 10){
    errors.contact = "phone number should not be less than 10"
  }
  }
  const handleChange = (e) => {
    e.preventDefault()
    runValidations()

    if(Object.keys(errors).length === 0){
      let i = data.length + 1
      setForms({})
     const formData = {
       id : i ,
       name : name ,
       designation : designation,
       contact : contact,
       skills : skills,
       date: date,
       type: type
     }
     addItems(formData)
     console.log(formData)
     setId('')
     setName('')
     setDesignation('')
     setContact('')
     setSkills('')
     setDate('')
    setType('')
    
  }else{
    setForms(errors)
  }
}

console.log(id , "idddddd")

  return(
      <div>
      
      <form onSubmit={handleChange}>
        <div >

        <label>Name  : </label>
        <input type="text" value={name} onChange={changeName} />
        {
          forms.name && <span>{forms.name}</span>
        }
        </div>
        <div ><br/>
        <label >Designation  : </label>
        <input type="text" value={designation} onChange={changeDesignation} />
       
        </div>
        <div ><br/>
        <label >Contact Details  : </label>
        <input type="text" placeholder="Type" value={type} onChange={changeType}/>
        <input type="number" placeholder="Phone Number" value={contact} onChange={changeContact} />
        {
          forms.contact && <span>{forms.contact}</span>
        }
         <button onClick={addPhoneNumber}>Add</button>
        </div><br/>
        <div >
        <label>Skills : </label>
        <input type="text" value={skills} onChange={changeSkills} />
        <button>Add</button>
        </div><br/>
        <div>
        <label >Date Of Birth  : </label>
        <input type="date" value={date} onChange={changeDate}/>
        </div><br/>
        <div>
          <input type="submit" value="Add Employee"/>
        </div>
      </form>
      </div>
  )
}
export default EmployeeForm
