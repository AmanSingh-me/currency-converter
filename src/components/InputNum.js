
import "./InputNum.css"

function InputNum({inputValue, setInput}) {

  return (
    <input type="number" name="currencyAmount" aria-label="Currency-Amount" value={inputValue}
    onChange={(e) => setInput(e.target.value)} placeholder="....." />
  )
}

export default InputNum;
