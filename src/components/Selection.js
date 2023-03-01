


export default function Selection({ allCurrencies, defaultSelected }) {

  
  return (
    <select aria-label="Currency Type" name="currencyType" >

      {
        allCurrencies !== undefined &&
        Object.entries(allCurrencies).map(value => (
          <option key={value[1].description} title={value[1].description} 
            value={value[0]}> {value[1].code} 
          </option>
          
        ))
        
      }
        
    </select>
  );
}
