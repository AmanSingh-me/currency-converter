import "./App.css";
import Main from "./Main";
import { GlobalContext } from "../context/Context";
import { useState } from "react";

function App() {

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
 
  return (
    <div className="App">
    <GlobalContext.Provider value={{fromCurrencyAmount, toCurrencyAmount, setFromCurrencyAmount, setToCurrencyAmount, fromCurrency, toCurrency, setFromCurrency, setToCurrency, from_ExchangeRate, 
    to_ExchangeRate, setFromExchangeRate, setToExchangeRate, currencyList, setCurrencyList}} >

      <Main />

    </GlobalContext.Provider>
    </div>
  );
}

export default App;
