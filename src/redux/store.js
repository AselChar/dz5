import {configureStore} from '@reduxjs/toolkit'
import calculatorslice from "./calculatorslice.js";


const store = configureStore ({
    reducer: {
        calculator: calculatorslice
    }
})

export default store