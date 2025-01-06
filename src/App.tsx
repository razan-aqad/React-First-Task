import { useState } from 'react'
import Result from './components/Result/Result-component';
import './App.css';
import './components/Result/Result.css';
function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  const calculate = () => {
    try{
      setResult(eval(input));
    }catch{
      setResult("Error");
    }
  };
  /* In the previous calculate function :
I can use the equals operation without using try-catch, but using it is better
because it ensures that if an error occurs, such as the user performing an invalid calculation
like division by zero, you can handle that issue properly. try-catch allows you to manage such
errors and prevent your application from crashing or behaving unexpectedly.
*/

  const calcResult = (value : string) => {
    setInput((prev) => prev + value)
  };

  const Reset = () => {
    setInput("");
    setResult("");
  };

  <Result input={input} result={result} />

  return (
    <>
    
      <div className="calculator">
        <div className="result">
          {/* inputs */}
        <div className="input">{input}</div>
          {/* output */}
        <div className="output">{result}</div>
        </div>
        <div className="btns">
          <button onClick={() => calcResult("1")}>1</button>
          <button onClick={() => calcResult("2")}>2</button>
          <button onClick={() => calcResult("3")}>3</button>
          <button onClick={() => calcResult("4")}>4</button>
          <button onClick={() => calcResult("5")}>5</button>
          <button onClick={() => calcResult("6")}>6</button>
          <button onClick={() => calcResult("7")}>7</button>
          <button onClick={() => calcResult("8")}>8</button>
          <button onClick={() => calcResult("9")}>9</button>
          <button onClick={() => calcResult("0")}>0</button>

          <button onClick={() => calcResult("*")}>*</button>
          <button onClick={() => Reset()}>C</button>
          <button onClick={() => calcResult("+")}>+</button>
          <button onClick={() => calcResult("-")}>-</button>

          <button onClick={() => calculate()}>=</button>
          <button onClick={() => calcResult("/")}>/</button>

          


        </div>
      </div>
    </>
  )
}

export default App;
