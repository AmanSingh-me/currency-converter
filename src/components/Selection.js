
import "./Selection.css"


export default function Selection({ allCurrencies, defaultSelected, setCurrency }) {
  
  return (
    <select aria-label="Currency Type" name="currencyType" value={defaultSelected}
     onChange={(e) => { setCurrency(e.target.value) }} >

      {
        allCurrencies !== undefined &&
        Object.entries(allCurrencies).map(value => (
          <option key={value[1].description} title={value[1].code} 
            value={value[0]}> {value[1].description} 
          </option>
          
        ))
        
      }
        
    </select>
  );
}
