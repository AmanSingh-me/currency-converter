

export default function ExchangeInfo({fromCurrencyAmount, fromCurrency, toCurrency, toCurrencyAmount }){
    
  return (
    <p style={{marginBottom: "2rem", fontSize: "1.2rem"}} > 
        {`${fromCurrencyAmount} ${fromCurrency} equals`} 
        <br></br>

        <span style={{ marginTop: "2rem", fontSize: "2rem"}} >
          {`${toCurrency} ${toCurrencyAmount}`}
        </span>
    </p>
  )
}
