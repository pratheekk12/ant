import React from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeList = (props) => {
    const {data} = props

    console.log(data)

    return(
        <div>
            {
                data.length > 0 ? (
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
                    <div><p>No employee found</p></div>
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