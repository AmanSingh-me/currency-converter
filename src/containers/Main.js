
import "./Main.css";
import InputNum from "../components/InputNum";
import Selection from "../components/Selection";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/functions";
import { createDynamic_ExchangeRateApi, getCurrencyList, locationBasedCurrency } from "../services/Api";

 


export default function Main() {

  // for input tag
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(1);
  const [toCurrencyAmount, setToCurrencyAmount] = useState("");

  // for select tag
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");


  // exchange rates for c
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

  useEffect(() => {

    if(fromCurrency && toCurrency){
    fetchData(createDynamic_ExchangeRateApi(fromCurrency, toCurrency), "json")
    .then(data => setFromExchangeRate(data.info.rate));

    fetchData(createDynamic_ExchangeRateApi(toCurrency, fromCurrency), "json")
    .then(data => setToExchangeRate(data.info.rate));
    }

  }, [ fromCurrency, toCurrency ])


  return (
    <main>
      <h1>Currency Converter</h1>

      <div>
        <InputNum inputValue={fromCurrencyAmount} setInput={setFromCurrencyAmount} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={fromCurrency} 
        setCurrency={setFromCurrency} />
      </div>

      <div>
        <InputNum inputValue={toCurrencyAmount} setInput={setToCurrencyAmount} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={toCurrency}
         setCurrency={setToCurrency} />
      </div>

    </main>
  );
}