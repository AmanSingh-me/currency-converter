
import "./Main.css";
import InputNum from "../components/InputNum";
import Selection from "../components/Selection";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/functions";
import { getCurrencyList, locationBasedCurrency } from "../services/Api";

 


export default function Main() {

  const [fromCurrency, setFromCurrency] = useState(1);
  const [toCurrency, setToCurrency] = useState("");

  const [from_ExchangeRate, setFromExchangeCurrency] = useState("");
  const [to_ExchangeRate, setToExchangeCurrency] = useState("");

  const [currencyList, setCurrencyList] = useState();

  useEffect(() => {
    fetchData(getCurrencyList).then(value => { setCurrencyList(value.symbols) })
  }, [])


  return (
    <main>
      <h1>Currency Converter</h1>

      <div>
        <InputNum input={fromCurrency} setInput={setFromCurrency} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={fromCurrency} />
      </div>

      <div>
        <InputNum input={toCurrency} setInput={setToCurrency} />
        <hr />
        <Selection allCurrencies={currencyList} defaultSelected={toCurrency} />
      </div>

    </main>
  );
}