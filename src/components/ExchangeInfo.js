

export default function ExchangeInfo({fromCurrencyAmount=0, fromCurrency="", toCurrencyAmount=0, toCurrency="" }){
  
  if(fromCurrencyAmount <= 0 || toCurrencyAmount <= 0 ){
    fromCurrencyAmount = 0;
    toCurrencyAmount = 0
  }
  
  return (
    <>
      <p style={{fontSize: "1.2rem"}} > 
        {`${fromCurrencyAmount} ${fromCurrency} equals`} 
        
      </p>

      <p style={{marginTop: "0rem", fontSize: "1.8rem"}} >
          {`${toCurrencyAmount} ${toCurrency}`}
      </p>
    </>
  )
}
