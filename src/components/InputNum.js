
import "./InputNum.css"

function InputNum({inputValue, changeHandler}) {

  return (
    <input type="number" name="currencyAmount" aria-label="Currency-Amount" value={inputValue}
     placeholder="....." onChange={ changeHandler } />
  )
}

export default InputNum;
