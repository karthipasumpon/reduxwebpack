import React from 'react'
import {useSelector} from 'react-redux'
function ViewCustomer() {

    const customer = useSelector( (state) => {
        return state.customers
    } )

  return (
    <div>
        <h2>Customer Names</h2>
        <ul>
            {
               customer && customer.map( (value, index) => {
                    return <li key={index}>{value}</li>
                } )
            }
        </ul>
    </div>
  )
}

export default ViewCustomer