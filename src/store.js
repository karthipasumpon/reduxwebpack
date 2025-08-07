import { configureStore } from '@reduxjs/toolkit'
import customerReducer  from './slice/customeSlice'

export const store = configureStore( {
    reducer : {
        customers: customerReducer
    }
})