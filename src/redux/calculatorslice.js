import {createSlice} from '@reduxjs/toolkit'

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        input1: '',
        input2: '',
        result: null,
        error: null
    },
    reducers: {
        setInput1: (state, action)=>{
            state.input1=action.payload
        },
        setInput2: (state, action) =>{
            state.input2=action.payload
        },
        setResult: (state, action) =>{
            state.result=action.payload
        },
        setError: (state, action) =>{
            state.error=action.payload
        },
    },
});

export const {setInput1, setInput2, setResult, setError} = calculatorSlice.actions
export default calculatorSlice.reducer
