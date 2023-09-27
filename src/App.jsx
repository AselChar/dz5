import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import {setError, setInput1, setInput2, setResult} from "./redux/calculatorslice.js";

function App() {

    const dispatch = useDispatch()
    const {input1, input2, result, error} = useSelector(state => state.calculator)


    const handleInputChange = (e, inputField)=>{
        const value = e.target.value

        if (inputField === 'input1'){
            dispatch(setInput1(value))
        }else {
            dispatch(setInput2(value))
        }

    }

    const operationClick= (operation)=>{
            if (input1 === '' || input2 === ''){
                dispatch(setError('Поле пустое'));
                return
            }
            dispatch(setError(null))

        switch (operation){
            case "+":
                dispatch(setResult(parseFloat(input1) + parseFloat(input2)))
                break;
            case "-":
                dispatch(setResult(parseFloat(input1) - parseFloat(input2)))
                break;
            case "*":
                dispatch(setResult(parseFloat(input1) * parseFloat(input2)))
                break;
            case "/":
                dispatch(setResult(parseFloat(input1) / parseFloat(input2)))
                break
            default: break
        }

    }





    return (
        <div>
            <input
                value={input1}
                type="number"
            onChange={(e)=> handleInputChange(e, 'input1')}
            />
            <input
                value={input2}
                type="number"
                onChange={(e)=> handleInputChange(e, 'input2')}

            />
            <div>
                <button onClick={()=> operationClick("+")} >+</button>
                <button onClick={()=> operationClick("-")}>-</button>
                <button onClick={()=> operationClick("*")}>*</button>
                <button onClick={()=> operationClick("/")}>/</button>
            </div>
            {error && <div>{error}</div>}
            {result !== null && <div>Результат: {result}</div>}
        </div>
    )

}
export default App
