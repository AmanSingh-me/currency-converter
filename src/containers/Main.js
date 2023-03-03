
import "./Main.css";
import InputNum from "../components/InputNum";
import Selection from "../components/Selection";
import { useEffect, useState } from "react";
import { exchangeAmount, fetchData } from "../utils/functions";
import { createDynamic_ExchangeRateApi, getCurrencyList, locationBasedCurrency } from "../services/Api";
import ExchangeInfo from "../components/ExchangeInfo";

 


export default function Main() {

  // for input tag
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(1);
  const [toCurrencyAmount, setToCurrencyAmount] = useState("");

  // for select tag
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");


  // exchange rates of both currency
  const [from_ExchangeRate, setFromExchangeRate] = useState("");
  const [to_ExchangeRate, setToExchangeRate] = useState("");

  const [currencyList, setCurrencyList] = useState();

  // getting all symbols initially
  useEffect(() => {

    fetchData(locationBasedCurrency, "text")
    .then(value => { setFromCurrency(value) })
    .then(() => {
      fetchData(getCurrencyList, "json").then(value => { setCurrencyList(value.symbols) })
    }).catch(error => {
      console.log(error)
    })
    
  }, [])

  // getting exchangeRates when currency changes
  useEffect(() => {

    if(fromCurrency && toCurrency){
    fetchData(createDynamic_ExchangeRateApi(fromCurrency, toCurrency), "json")
    .then(data => setFromExchangeRate(data.info.rate));

    fetchData(createDynamic_ExchangeRateApi(toCurrency, fromCurrency), "json")
    .then(data => setToExchangeRate(data.info.rate));
    }

  }, [ fromCurrency, toCurrency ])


  // updating toCurrencyAmount whenever exchangeRate changes
  useEffect(() => {
    setToCurrencyAmount(exchangeAmount(fromCurrencyAmount, from_ExchangeRate))
  }, [ from_ExchangeRate, to_ExchangeRate ])


  // handling input on change event
  const from_ChangeHandler = (e) => {
    setFromCurrencyAmount(e.target.value);
    setToCurrencyAmount(exchangeAmount(e.target.value, from_ExchangeRate))
  }
  const to_ChangeHandler = (e) => {
    setToCurrencyAmount(e.target.value)
     setFromCurrencyAmount(exchangeAmount(e.target.value, to_ExchangeRate))
  }



  return (
    <main>
      <h1>Currency Converter</h1>
      <ExchangeInfo fromCurrency={fromCurrency} fromCurrencyAmount={fromCurrencyAmount} 
        toCurrencyAmount={toCurrencyAmount} toCurrency={toCurrency} />
      <div>
        <InputNum inputValue={fromCurrencyAmount} changeHandler={from_ChangeHandler} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={fromCurrency} 
        setCurrency={setFromCurrency} />
      </div>

      <div>
        <InputNum inputValue={toCurrencyAmount} changeHandler={to_ChangeHandler} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={toCurrency}
         setCurrency={setToCurrency} />
      </div>

    </main>
  );
}