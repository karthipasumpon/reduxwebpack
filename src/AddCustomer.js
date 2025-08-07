import React, { useState } from 'react'
import ViewCustomer from './ViewCustomer'
import {addCustomer as addCustomerAction} from './slice/customeSlice'
import { useDispatch } from 'react-redux'
function AddCustomer() {
  const [input, setInput] = useState("")
//   const [customer, setCustomer] = useState([])
const dispatch = useDispatch()
  function addCustomer() {
    if(input) {
        // setCustomer( (prevVal) => {
        //     return [...prevVal, input]
        // } )
        dispatch(addCustomerAction(input))
        setInput("")
    }
    
  } 
   
  return (
    <div>
        <form>
            <label>Customer Name</label>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='button' onClick={addCustomer} >Add</button>
        </form>
      
    </div>
  )
}

export default AddCustomer