import React , {useState , useEffect} from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

const App = (props) => {
  const [data , setData] = useState([])

  useEffect(() => {
    if(localStorage.getItem('data')){
    const result = JSON.parse(localStorage.getItem('data'))
    setData(result)
    }else{
      setData([])
    }
    },[])
    
    //useEffect(() => {
      //  localStorage.setItem('data' , JSON.stringify(data))
    //}, [data])

  const addItems = (ele) => {
    console.log(ele)
    const result = [...data , ele]
    console.log(result)
    setData(result)
    localStorage.setItem('data' , JSON.stringify(result))

  }

  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeForm addItems={addItems} data={data}/>
      <EmployeeList data={data}/>
    </div>
  )
}
 
export default App
