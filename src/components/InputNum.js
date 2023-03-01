
import "./InputNum.css"

function InputNum({input, setInput}) {

  return (
    <input type="number" name="currencyAmount" aria-label="Currency-Amount" value={input}
    onChange={(e) => setInput(e.target.value)} placeholder="....." />
  )
}

export default InputNum;
