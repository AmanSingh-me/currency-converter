
import "./Main.css";
import { GlobalContext } from "../context/Context";
import InputNum from "../components/InputNum";
import Selection from "../components/Selection";
import { useContext, useEffect, useState } from "react";
import { exchangeAmount, fetchData } from "../utils/functions";
import { createDynamic_ExchangeRateApi, getCurrencyList, locationBasedCurrency } from "../services/Api";
import ExchangeInfo from "../components/ExchangeInfo";


 


export default function Main() {

 const { fromCurrencyAmount, toCurrencyAmount, setFromCurrencyAmount, setToCurrencyAmount, fromCurrency, toCurrency, setFromCurrency, setToCurrency, from_ExchangeRate, to_ExchangeRate, setFromExchangeRate, setToExchangeRate, currencyList, setCurrencyList } = useContext(GlobalContext);


  // getting all symbols initially
  useEffect(() => {

    fetchData(locationBasedCurrency, "text")
    .then(value => { setFromCurrency(value) })
    .then(() => {
      fetchData(getCurrencyList, "json").then(value => { setCurrencyList(value.symbols) })
    }).catch(error => {
      console.error(error)
    })
    
  }, [])


  // getting exchangeRates when currency changes
  useEffect(() => {

    if(fromCurrency && toCurrency){
    fetchData(createDynamic_ExchangeRateApi(fromCurrency, toCurrency), "json")
    .then(data => setFromExchangeRate(data.info.rate))
    .catch(error => { console.error(error) })

    fetchData(createDynamic_ExchangeRateApi(toCurrency, fromCurrency), "json")
    .then(data => setToExchangeRate(data.info.rate))
    .catch(error => { console.error(error) })
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