import React,{useState} from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeList = (props) => {
    const {data} = props
    const [details,setDetails] = useState(false)

    console.log(data)


    const handleButton = (e)=>{
        setDetails(!details)
    }
    return(
        <div>
            <button onClick={handleButton}>View Details</button>
            {
                data.length > 0 && details ? (
                    <div>
                        <br/>
                        {
                           data.map((ele)=>{
                               return (
                                <EmployeeItem 
                                    key={ele.id} 
                                    {...ele}/>
                               )
                           }) 
                        }
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
        
    )
}
       
    //     {
    //         data.length > 0  ? (
    //     <div>
    //             { 
    //                  data.map((ele) => {
    //                 return(
    //                  <EmployeeItem 
    //                  key={ele.id} 
    //                  {...ele}/>
    //                 )
    //             })
    //         }
    //     </div>) : (
    //         <p>no employee</p>
    //     )
    //             } 
    // )


export default EmployeeList